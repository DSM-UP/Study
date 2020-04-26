# coding: utf-8
import numpy as np
import mnist

class TwoLayerNet:
    def __init__(self, input_size, hidden_size, outpu_size, weight_init_std = 0.01):
        self.params = dict()
        self.params['W1'] = weight_init_std * np.random.randn(input_size, hidden_size)
        self.params['b1'] = weight_init_std * np.random.randn(hidden_size)

        self.params['W2'] = weight_init_std * np.random.randn(hidden_size, outpu_size)
        self.params['b2'] = weight_init_std * np.random.randn(outpu_size)

    def predict(self, x):
        W1, W2 = self.params['W1'], self.params['W2']
        b1, b2 = self.params['b1'], self.params['b2']

        a1 = np.dot(x, W1) + b1
        z1 = sigmoid(a1)
        a2 = np.dot(z1, W2) + b2
        z1 = sigmoid(a2)
        y = softmax(z1)

        return y

    def loss(self, x, t):
        y = self.predict(x)

        return cross_entropy_error(y, t)

    def accuracy(self, x, t):
        y = self.predict(x)
        y = np.argmax(y, axis=1)
        t = np.argmax(t, axis=1)

        accuracy = np.sum(y == t) / float(x.shape[0])

        return accuracy

    def numerical_gradient(self, x, t):
        loss_W = lambda W: self.loss(x, t)

        grads = {}
        grads['W1'] = numerical_gradient(loss_W, self.params['W1'])
        grads['W2'] = numerical_gradient(loss_W, self.params['W2'])
        grads['b1'] = numerical_gradient(loss_W, self.params['b1'])
        grads['b2'] = numerical_gradient(loss_W, self.params['b2'])

        return grads


def numerical_gradient(f, x):
    h = 1e-4 # 무한소 대용
    _grad = np.zeros_like(x)

    x_size = x.size
    x = x.flat

    for idx in range(x_size):

        tmp_val = x[idx]

        x[idx] = tmp_val + h
        fxh1 = f(x)

        x[idx] = tmp_val + h
        fxh2 = f(x)

        _grad.flat[idx] = (fxh1 - fxh2) / (2 * h)
        x[idx] = tmp_val

    return _grad


def cross_entropy_error(y, t):
    if y.ndim == 1:
        t = t.reshape(1, t.size)
        y = y.reshape(1, y.shape)

    batch_size = y.shape[0]

    return -np.sum(t * np.log(y + 1e-7)) / batch_size


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def init_network():
    network = dict()
    network['W!'] = np.array([[], []])
    network['b1'] = np.array([])
    network['W2'] = np.array([[], []])
    network['b2'] = np.array([])
    network['W3'] = np.array([[], []])
    network['b3'] = np.array([])

    return network


def softmax(a):
    c = np.max(a)
    exp_a = np.exp(a - c)
    sum_exp_a = np.sum(exp_a)
    y = exp_a / sum_exp_a

    return y


(x_train, t_train), (x_test, t_test) = mnist.load_mnist(normalize=True, one_hot_label=True)

train_loss_list = []
train_acc_list = []
test_acc_list = []

# 하이퍼 파라미터
iters_num = 1000   # 반복 횟수
train_size = x_train.shape[0]   # 학습 사진 갯수
batch_size = 100    # 미니배치 크기
learning_rate = 0.1

network = TwoLayerNet(784, 50, 10)

iter_per_epoch = 5 # max(train_size / batch_size, 1)

print(iter_per_epoch)

for i in range(iters_num):
    # 미니배치 획득
    batch_mask = np.random.choice(train_size, batch_size)
    x_batch = x_train[batch_mask]
    t_batch = t_train[batch_mask]

    print('cycle end')

    # 기울기 계산
    grad = network.numerical_gradient(x_batch, t_batch)

    print('cycle end')

    # 매개변수 갱신
    for key in ('W1', 'b1', 'W2', 'b2'):
        network.params[key] -= learning_rate * grad[key]

    # 학습 경과 기록
    loss = network.loss(x_batch, t_batch)
    train_loss_list.append(loss)

    print('cycle end')

    if i% iter_per_epoch == 0:
        train_acc = network.accuracy(x_train, t_train)
        test_acc = network.accuracy(x_test, t_test)
        train_acc_list.append(train_acc)
        test_acc_list.append(test_acc)
        print("train acc, test acc | " + str(train_acc) + " " + str(test_acc))

print(train_loss_list[-1])
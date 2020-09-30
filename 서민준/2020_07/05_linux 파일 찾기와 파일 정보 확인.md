## linux 파일 찾기, 파일 정보 확인

## find

`find [options] path expression`

자신이 찾고자 하는 파일을 찾을 때 사용하는 명령어입니다.

- path : 자신이 어떤 경로에서 파일을 찾을지 결정합니다.
- expression : 어떤 파일 형식으로 찾을지를 결정합니다.

![find -name](https://user-images.githubusercontent.com/51042546/86523245-7c724900-bea4-11ea-8395-c57c86521e3b.png)

- 현재 디렉터리 및 하위 디렉터리에서 파일을 찾고자 할 때는 `.`을 path로 지정하면 된다.
- `-name`을 주게 되면 바로 뒤에 오는 인자의 이름을 지닌 파일만을 찾을 수 있다.
- `*`을 사용하면 해당 자리에는 어떤 문자(열)도 올 수 있다. 단, 이때는 반드시 ' '로 감싸줘야 한다.

![find -size c](https://user-images.githubusercontent.com/51042546/86523311-716be880-bea5-11ea-8a04-3adc6409c08d.png)

- `-size` 옵션을 주게 되면 파일의 사이즈 조건을 추가하여 좀 더 상세한 검색을 할 수 있다.
- 뒤에 숫자로 사이즈를 지정할 수 있고, 앞에 `+`가 붙으면 이상, `-`가 붙으면 이하로 검색한다.
- 뒤에는 사이즈의 단위를 지정할 수 있는데 default는 `b`로 512-bytes를 의미한다.
- 바이트로 검색하고 싶다면 `c`를 붙이면 된다.

### cat

`cat filename`

해당 파일에 작성된 내용을 화면에 출력한다.

![cat](https://user-images.githubusercontent.com/51042546/86523337-f525d500-bea5-11ea-8ad5-76b17037750b.png)

### head

`head [OPTION]... [FILE]...`

파일의 앞부분부터 내용을 화면에 보여준다.

주로 앞부분 몇 줄까지만 내용을 확인할 때 사용한다.

![head](https://user-images.githubusercontent.com/51042546/86523368-5d74b680-bea6-11ea-8feb-bc7b20849a31.png)

- `-n`옵션을 통해 파일의 맨 앞줄부터 몇 줄까지만을 출력할지 결정할 수 있다. n 바로 뒤에 수를 지정해주면 된다.

### tail

`tail [OPTION]... [FILE]...`

파일의 뒷부분에서 특정 줄까지만 내용을 보여준다.

![tail](https://user-images.githubusercontent.com/51042546/86523387-aa588d00-bea6-11ea-9e55-22dd2f8cece0.png)

- `-n`옵션을 통해 파일의 맨 뒷줄부터 몇 줄까지만을 출력할지 결정할 수 있다. n 바로 뒤에 수를 지정해주면 된다.

### grep

`grep [OPTIONS] pattern [FILES]`

특정 문자(열)을 검색할 때 사용한다.

![grep](https://user-images.githubusercontent.com/51042546/86523417-fe637180-bea6-11ea-9953-c173fea8b669.png)

- 찾고자 하는 문자열 뒤에 파일을 지정해주면 해당 파일 내에서 문자열을 검색한다.
- 문자열을 찾게 되면 해당 문자열이 작성되어 있는 줄을 출력하고 자신이 찾고자 한 문자열은 색깔이 다른 색으로 출력된다.

![grep space](https://user-images.githubusercontent.com/51042546/86523430-31a60080-bea7-11ea-8557-a445a9a29e0c.png)

- 만약 찾고자 하는 문자열에 공백이 들어가게 되면 " "로 감싸줘야 한다.

![grep ignore](https://user-images.githubusercontent.com/51042546/86523445-7e89d700-bea7-11ea-9eca-4ab8d25ce778.png)

- `grep`은 검색할 때 기본적으로 문자열의 대소문자를 구분하기 때문에 "Hello"라는 문자열이 기록되어 있다하더라도 "hello"로 검색하면 찾을 수 없다.
- 이럴 때 대소문자를 구분하지 않게 하기 위해서 `-i`옵션을 주게 되면 대소문자 구분없이 검색할 수 있다.

### cmp

`cmp filename1 filename2`

두 개의 파일 내용을 비교하여 다른 점이 있는지 알려준다.

가장 최초로 발견된 다른 부분의 위치를 byte와 line으로 알려준다.

![cmp](https://user-images.githubusercontent.com/51042546/86523488-42a34180-bea8-11ea-98d8-f829d2bdce71.png)

### diff

`diff file1 file2`

두 개의 파일의 내용을 검사하여 가장 먼저 발견된 다른 점을 화면에 출력하여 알려준다.

![diff](https://user-images.githubusercontent.com/51042546/86523503-65355a80-bea8-11ea-8580-4c2721d42cf7.png)

### file

`file filename`

`filename`으로 전달된 파일이 파일일 경우 파일에 대한 정보를 출력한다.

확장자가 없는 파일에 대해 어떤 파일인지 확인할 때 주로 사용한다.

![file](https://user-images.githubusercontent.com/51042546/86523526-cfe69600-bea8-11ea-86a1-c6547d98d717.png)

### which

`which filename`

해당 파일이 어디에 있는지 경로를 출력해주는 명령어이다.

![which](https://user-images.githubusercontent.com/51042546/86523566-5e5b1780-bea9-11ea-8d46-4d24f9253b98.png)
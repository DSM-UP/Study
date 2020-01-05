#include "opencv2/opencv.hpp"

#include <iostream>

cv::Mat calcGrayHist(const cv::Mat& img);
cv::Mat getGrayHistImage(const cv::Mat& hist);
cv::Mat histogram_stretching(const cv::Mat& src);

int main() {

	cv::VideoCapture camera(0);

	if (!camera.isOpened()) {
		std:: cerr << "카메라를 열지 못했습니다." << std::endl;
		return -1;
	}
	
	cv::namedWindow("image1");
	cv::namedWindow("image2");
	cv::namedWindow("image3");
	cv::namedWindow("image4");
	cv::namedWindow("image5");

	cv::Mat frame;
	cv::Mat color_contrast_frame;
	cv::Mat gray_frame;
	cv::Mat static_contrast_frame;
	cv::Mat auto_contrast_frame;
	cv::Mat hist;
	while (true) {
		camera >> frame;

		/*for (int i = 0; i < frame.rows; i++) {
			for (int j = 0; j < frame.cols; j++) {

			}
		}*/

		color_contrast_frame = frame + (frame - 128) * 1.1;

		cv::cvtColor(frame, gray_frame, cv::COLOR_BGR2GRAY);
		static_contrast_frame = gray_frame + (gray_frame - 128) * 1.1;

		cv::imshow("image1", frame);
		cv::imshow("image2", gray_frame);
		cv::imshow("image3", static_contrast_frame);
		cv::imshow("image4", color_contrast_frame);
		/*hist = calcGrayHist(gray_frame);
		cv::imshow("image5", getGrayHistImage(hist));*/
		cv::imshow("image5", histogram_stretching(gray_frame));


		if (cv::waitKey(1) == 27)
			break;
	}


	camera.release();
	return 0;
}
cv::Mat calcGrayHist(const cv::Mat& img) {
	CV_Assert(img.type() == CV_8UC1);

	cv::Mat hist;
	int channels[] = { 0 };
	int dims = 1;
	const int histSize[] = { 256 };
	float graylevel[] = { 0, 256 };
	const float* ranges[] = { graylevel };
	
	cv::calcHist(&img, 1, channels, cv::noArray(), hist, dims, histSize, ranges);

	return hist;
}

cv::Mat getGrayHistImage(const cv::Mat& hist) {
	double histMax;
	cv::minMaxLoc(hist, 0, &histMax);


	cv::Mat imgHist(100, 256, CV_8UC1, cv::Scalar(255));
	for (int i = 0; i < 256; i++)
		cv::line(imgHist, cv::Point(i, 100), cv::Point(i, 100 - cvRound(hist.at<float>(i, 0) * 100 / histMax)), cv::Scalar(0));

	return imgHist;
}
cv::Mat histogram_stretching(const cv::Mat& src) {
	double gmin, gmax;
	cv::minMaxLoc(src, &gmin, &gmax);
	
	std::cout << gmin << " " << gmax << std::endl;

	return cv::Mat((src - gmin) * 255 / (gmax - gmin));
}

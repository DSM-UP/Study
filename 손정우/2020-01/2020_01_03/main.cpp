#include "opencv2/opencv.hpp"

#include <iostream>

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

	cv::Mat frame;
	cv::Mat color_contrast_frame;
	cv::Mat gray_frame;
	cv::Mat static_contrast_frame;
	cv::Mat auto_contrast_frame;
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


		if (cv::waitKey(1) == 27)
			break;
	}


	camera.release();
	return 0;
}

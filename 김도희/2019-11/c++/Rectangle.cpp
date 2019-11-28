#include <iostream>
#include "Rectangle.h"

using namespace std;

Rectangle::Rectangle()
{
	cout << "Rectangle 디폴트 생성자 호출" << endl;
}

Rectangle::Rectangle(int x1, int y1, int x2, int y2)
	:LP(x1, y1), RP(x2, y2)
{
	cout << "Rectangle 인자있는 생성자 호출" << endl;
}

void Rectangle::showRectangle()
{
	LP.showPoint();
	RP.showPoint();
}

void Rectangle::setRectangle(int x1, int y1, int x2, int y2)
{
	
}

int Rectangle::getArea()
{
	return (RP.getX() - LP.getX()) * (RP.getY() - LP.getY());
}

Rectangle::~Rectangle()
{
	cout << "Rectangle 소멸자 호출" << endl;
}

void Rectangle::setRectangle(int x1, int y1, int x2, int y2)
{
	LP.setX(x1);
	LP.setY(y1);
	RP.setX(x1);
	RP.setY(y1);
}
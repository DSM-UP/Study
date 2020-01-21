#include <iostream>
#include <vector>

using namespace std;

vector<signed char> a;
vector<signed char> b;
vector<signed char> result;

typedef vector<signed char>::reverse_iterator It;

int main(int argc, char** argv) {
	
	signed char num = 0;
	signed char minus = 0;
	
	while( (num = getchar()) != '\n'&&num !=' '){
		if(num == '-')minus = -1;
		else a.push_back((num - '0') * minus);
	}
	while((num = getchar()) != '\n'&&num !=' '){
		if(num == '-')minus = -1;
		else b.push_back((num - '0') * minus);
	}


		
	It ait = a.rbegin(), bit = b.rbegin();
	signed char up = 0, res = 0;
	signed char adata, bdata;
	
	while(ait != a.rend() || bit != b.rend()){
		adata = ait!=a.rend()?*ait:0;
		bdata = bit!=b.rend()?*bit:0;
		

		
		res = adata + bdata + up;
		if(res < 10){
			if(res < 0) up = -1;
			else up = 0;
			
		}
		else{
			res -=10;
			up = 1;
		}
		result.push_back(res + '0');
		if(ait != a.rend())ait++;
		if(bit != b.rend())bit++;
	}
	
	if(up == 1) result.push_back(up);
	if(up == -1) result.push_back('-');
	
	for(It it = result.rbegin(); it!=result.rend(); it++)
		printf("%c(%d)",*it,*it);
	
	
	return 0;
}

/*
10000000000000000000000000000000000000000000
100000000000000000000000000000000000000000000
*/


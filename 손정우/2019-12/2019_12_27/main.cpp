#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

vector<int> solution(vector<string> genres, vector<int> plays) {
	vector<int> answer;

	map<string, pair<int, int>> maps;
	map<string, int> genresTotal;

	int size = genres.size();
	for (int i = 0; i < size; i++) {
		if (genresTotal.find(genres[i]) == genresTotal.end()) {
			genresTotal.insert({ genres[i], plays[i] });
			maps.insert({ genres[i], make_pair(i, i) });
		}
		else {
			genresTotal[genres[i]] += plays[i];
			auto& playcounts = maps[genres[i]];
			if (plays[playcounts.second] < plays[i]) {
				if (plays[playcounts.first] <= plays[i]) {
					if (plays[playcounts.first] == plays[i]) {
						playcounts.second = i;
						
					}
					else {
						playcounts.second = playcounts.first;
						playcounts.first = i;
					}
				}
				else
					playcounts.second = i;
			}
		}
	}

	map<int, string, greater<int>> OrderedGenresTotal;

	for (auto i : genresTotal) {
		OrderedGenresTotal.insert({ i.second, i.first });
	}

	for (auto i : OrderedGenresTotal) {
		answer.push_back(maps[i.second].first);
		if(maps[i.second].first != maps[i.second].second)
			answer.push_back(maps[i.second].second);
	}

	return answer;
}

int main() {
	//[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]
	//{ "classic", "pop", "classic", "classic", "pop" }, { 500, 600, 150, 800, 2500 }
	for (auto i : solution({ "c" }, { 500})) {
		cout << i << ", ";
	}

	return 0;
}
package Science;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.CardLayout;
import java.util.Random;
import javax.swing.JOptionPane;

public class Quiz extends JFrame{
	JPanel p=new JPanel();
	CardLayout cards=new CardLayout();
	int numQs;
	int wrongs=0;
	int total=0;
	
/*	String[][] explanation = {
			{"인간이 현재까지 발견한 원소들 중에서 우주에서 가장 풍부하며, 가장 가볍고 간단한 구조를 가져 원자 번호가 가장 작은 원소입니다."},
			
	};*/
	String[][] answers={
		{"","수소","헬륨","나트륨","산소"},
		{"","헬륨","네온","아르곤","크립톤"},
		{"","나트륨","칼륨","리튬","납"},
		{"","마그네슘","칼슘","스트론튬","베릴륨"},

		};
	RadioQuestion questions[]={
		
		new RadioQuestion(
			0,"<html><body><center><br><br><big>인간이 현재까지 발견한 원소들 중에서 우주에서 가장 풍부하며,<br> 가장 가볍고 간단한 구조를 가져 원자 번호가 가장 작은 원소는?</big></center></body></html>",
			answers[0],
			1,this
		),
		new RadioQuestion(
			1,"<html><body><center><br><br><big>그리스 티탄족 태양신 헬리오스에서 이름을 따왔다.<br>"+
			"그 이유는 1968년 프랑스 천문학자 피에르 장센이 태양 일식에서 그 존재를 발견했기 때문이다."+"<br>이 원소에 해당하는것은?</center></body></html>",
			answers[1],
			1,this
		),
		new RadioQuestion(
			2,"<html><body><center><br><br><big>\r\n" + 
			"가장 밀도가 낮은 금속 원소로, 석유에 넣으면 위에 떠 있는다.<br> 이 원소는?</big></center></body></html>",
			answers[2],
			3,this
			),
		new RadioQuestion(
			3,"<html><body><center><br><br><big>단맛이 난다고 알려진 원소이지만, <br> 실은 발암성이 강한 맹독성 원소이다. <br>이 원소는?</big></center></body></html>",
			answers[3],
			4,this
			),
		
		
		
	};

	public static void main(String args[]){
		new Quiz();
	}
	
	public Quiz(){
		super("Corevia");
		setResizable(false);
		setSize(1200,800);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		p.setLayout(cards);
		numQs=questions.length;
		for(int i=0;i<numQs;i++){
			 p.add(questions[i],"q"+i);
		}
		Random r=new Random();
		int i=r.nextInt(numQs);
		cards.show(p,"q"+i);
		add(p);
		setVisible(true);
	}
	
	public void next(){
		if((total-wrongs)==numQs){
			showSummary();
		}else{
			Random r=new Random();
			boolean found=false;
			int i=0;
			while(!found){
				i=r.nextInt(numQs);
				if(!questions[i].used){
					found=true;
				}
			}
			cards.show(p,"q"+i);
		}
	}
	
	public void showSummary(){
		JOptionPane.showMessageDialog(null,"끝났습니다. 당신의 성적"+
			"\n당신의 응답 중 "+wrongs+ "개 틀렸습니다." +
			"\n당신의 응답 중 "+(total-wrongs)+ "개 맞았습니다." +
			"\n당신의 정답률 : \t\t"+(int)(((float)(total-wrongs)/total)*100)+"%","최종결과", JOptionPane.PLAIN_MESSAGE
		);
		System.exit(0);
	}
}
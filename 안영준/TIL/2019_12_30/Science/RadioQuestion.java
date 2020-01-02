package Science;

import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.AbstractButton;
import javax.swing.BoxLayout;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

import java.awt.event.ActionListener;
import java.util.Arrays;
import java.util.Scanner;
import java.awt.Font;
import java.awt.event.ActionEvent;

public class RadioQuestion extends JPanel implements ActionListener{
	Scanner sc = new Scanner(System.in);
	int correctAns;
	int information;
	Quiz quiz;	
	int selected;
	boolean used;
	//질문
	JPanel qPanel=new JPanel();
	//예시

	//답
	String[] explanations;
	JPanel aPanel=new JPanel();
//	JRadioButton[] explanations;
	JRadioButton[] responses;
	ButtonGroup group=new ButtonGroup();
	//bottom
	JPanel botPanel=new JPanel();
	JButton next=new JButton("Next");
	JButton finish=new JButton("Finish");
	
	String[] explanation =
			{"인간이 현재까지 발견한 원소들 중에서 우주에서 가장 풍부하며,\n 가장 가볍고 간단한 구조를 가져 원자 번호가 가장 작은 원소입니다.",
					
			//{"인간이 현재까지 발견한 원소들 중에서 우주에서 가장 풍부하며, 가장 가볍고 간단한 구조를 가져 원자 번호가 가장 작은 원소입니다.2"},
			"헬륨(He) 원자번호 2번\r\n" + 
					"목소리 변조에 많이 사용되는 원소이다.\r\n" + 
					"비활성 기체의 첫 번째 원소로, 우주에서 수소 다음으로 가장 많이 존재한다.\r\n" + 
					"",
			"리튬(Li) 원자번호 3번\r\n" + 
					"활용 예로 리튬이온 전지가 가장 유명하다.\r\n" + 
					"불꽃색은 빨간색을 띤다.\r\n" + 
					"",
			"베릴륨(Be) 원자번호 4번\r\n" + 
					"원자로의 감속재 및 반사재로 쓰인다.\r\n" + 
					"공학적으로 최고의 재료로 티타늄보다 가볍고, 튼튼하다.\r\n" + 
					"맹독성 발암물질로, 이것의 분진은 석면 분진의 유독성을 가볍게 능가한다.\r\n" + 
					""};
	
		public RadioQuestion(int index,String q, String[] options/*,String[] explanation*/, int ans, Quiz quiz){
		this.quiz=quiz;
		setLayout(new BoxLayout(this,BoxLayout.Y_AXIS));
		correctAns=ans;
		information = index;
		//question
		JLabel label = new JLabel(q);
		label.setHorizontalAlignment(JLabel.CENTER);
		qPanel.add(label);
		
		add(qPanel);
		responses=new JRadioButton[options.length];
	
		for(int i=0;i<options.length;i++){
			
			responses[i]=new JRadioButton(options[i]);
			Font font = new Font(responses[i].getFont().getName(),responses[i].getFont().getStyle(),25);
			responses[i].addActionListener(this);	
			responses[i].setFont(font);
			group.add(responses[i]);
			aPanel.add(responses[i]);
		
		}
		responses[0].setSelected(true);
		add(aPanel);
		//bottom
		Font nextFont = new Font(next.getFont().getName(),next.getFont().getStyle(),25);
		next.addActionListener(this);
		next.setFont(nextFont);
		Font finishFont = new Font(finish.getFont().getName(), finish.getFont().getStyle(), 25);
		finish.addActionListener(this);
		finish.setFont(finishFont);
		botPanel.add(next);
		botPanel.add(finish);
		add(botPanel);
	
	}
	
	public void actionPerformed(ActionEvent e){
		Object src=e.getSource();
		//next button

		if(src.equals(next)){
			showResult();
			if(selected==correctAns){
				used=true;
				quiz.next();
			}
		}
		//finish button
		finish.setSelected(false);
		if(src.equals(finish)){
			quiz.showSummary();
			//quiz = new Quiz();
		}
		//radio buttons
		for(int i=0;i<responses.length;i++){
				//responses.setSelected(false);
			if(src==responses[i]){
				selected=i;
			}
			
		}
	}
	
	public void showResult(){
		
		
		String text=responses[selected].getText();
		quiz.total++;
		if(selected==correctAns){
			JOptionPane.showMessageDialog(null,text+"\n정답입니다.\n"+ explanation[information] ,"해설", 	JOptionPane.PLAIN_MESSAGE);
			
		}else{
			
			quiz.wrongs++;
			JOptionPane.showMessageDialog(null,"\n오답입니다.\n 다시풀어보세요. \n ","해설", JOptionPane.PLAIN_MESSAGE);
		}
	}
}

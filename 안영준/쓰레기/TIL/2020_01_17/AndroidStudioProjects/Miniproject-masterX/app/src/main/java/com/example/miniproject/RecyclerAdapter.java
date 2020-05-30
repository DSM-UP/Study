package com.example.miniproject;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.ItemViewHolder> {

    // adapter에 들어갈 list 입니다.
    private ArrayList<Data> listData = new ArrayList<>();

    @NonNull
    @Override
    public ItemViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        // LayoutInflater를 이용하여 전 단계에서 만들었던 item.xml을 inflate 시킵니다.
        // return 인자는 ViewHolder 입니다.
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recyclerview, parent, false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ItemViewHolder holder, int position) {
        // Item을 하나, 하나 보여주는(bind 되는) 함수입니다.
        holder.onBind(listData.get(position));
    }

    @Override
    public int getItemCount() {
        // RecyclerView의 총 개수 입니다.
        return listData.size();
    }

    void addItem(Data data) {
        // 외부에서 item을 추가시킬 함수입니다.
        listData.add(data);
    }

    // RecyclerView의 핵심인 ViewHolder 입니다.
    // 여기서 subView를 setting 해줍니다.
    class ItemViewHolder extends RecyclerView.ViewHolder {

        private Button button1;
        private Button button2;
        private Button button3;
        private Button button4;
        private Button button5;
        private Button button6;
        private Button button7;
        private Button button8;
        private Button button9;



        ItemViewHolder(View itemView) {
            super(itemView);
            button1 = itemView.findViewById(R.id.recyclerview_btn1);
            button2 = itemView.findViewById(R.id.recyclerview_btn2);
            button3 = itemView.findViewById(R.id.recyclerview_btn3);
            button4= itemView.findViewById(R.id.recyclerview_btn4);
            button5 = itemView.findViewById(R.id.recyclerview_btn5);
            button6= itemView.findViewById(R.id.recyclerview_btn6);
            button7 = itemView.findViewById(R.id.recyclerview_btn7);
            button8 = itemView.findViewById(R.id.recyclerview_btn8);
            button9 = itemView.findViewById(R.id.recyclerview_btn9);

            //textView1 = itemView.findViewById(R.id.textView1);
            //textView2 = itemView.findViewById(R.id.textView2);
            //imageView = itemView.findViewById(R.id.imageView);
        }

        void onBind(Data data) {
            button1.setText(data.getRecycler_btn1());
            button2.setText(data.getRecycler_btn2());
            button3.setText(data.getRecycler_btn3());
            button4.setText(data.getRecycler_btn4());
            button5.setText(data.getRecycler_btn5());
            button6.setText(data.getRecycler_btn6());
            button7.setText(data.getRecycler_btn7());
            button8.setText(data.getRecycler_btn8());
            button9.setText(data.getRecycler_btn9());

            //textView1.setText(data.getTitle());
            //textView2.setText(data.getContent());
            //imageView.setImageResource(data.getResId());
        }
    }
}

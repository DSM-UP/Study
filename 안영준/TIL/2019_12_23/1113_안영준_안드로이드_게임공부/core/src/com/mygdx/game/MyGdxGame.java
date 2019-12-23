package com.mygdx.game;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.g2d.TextureRegion;

public class MyGdxGame extends ApplicationAdapter {
/*  이미지 위치
	private int width, height;
	private float widthJoe, heightJoe;
	private SpriteBatch batch;
	private Texture minijoe;
	private Texture fake;

	private TextureRegion regionFake;*/
	@Override
	public void create(){
		/*
	    fake = new Texture("fake.png");
		minijoe = new Texture("minijoe.png");
        batch = new SpriteBatch();

        regionFake = new TextureRegion(fake,0,0,122,122);


		batch = new SpriteBatch();

		width = Gdx.graphics.getWidth();
		height = Gdx.graphics.getHeight();

		widthJoe = minijoe.getWidth();
		heightJoe = minijoe.getHeight();
	*/
	 }
	public void dispose(){
	/*
		minijoe.dispose();
		batch.dispose();
		fake.dispose();
	*/
	}

	public void render(){

		Gdx.gl.glClearColor(0.3f,0.3f,0.3f,1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

		if (Gdx.input.justTouched()){
			System.out.println("뭐라는거야");
		}
		//if(Gdx.input.isKeyJustPressed(Input.Keys.B))
		/*

		Gdx.gl.glClearColor(1,0,0.5f,1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

		batch.begin();
		batch.draw(minijoe,50,0);
		batch.draw(regionFake,250,0);
		batch.end();
		*/
	}

}


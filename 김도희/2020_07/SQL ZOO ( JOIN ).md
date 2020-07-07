## SQL ZOO ( JOIN )

1. **Modify it to show the** *matchid* **and** *player* **name for all goals scored by Germany. To identify German players, check for:** `teamid = 'GER'`

   

- code

  SELECT matchid, player from goal
      WHERE teamid = 'GER'



2. **Show id, stadium, team1, team2 for just game 1012**

   

- code

  SELECT id,stadium,team1,team2 FROM game
     WHERE id = 1012

​     

3. **Modify it to show the player, teamid, stadium and mdate for every German goal.**



- code

  SELECT player, teamid, stadium ,mdate FROM game JOIN goal
        ON (id=matchid AND teamid = 'GER')



4. **Show the team1, team2 and player for every goal scored by a player called Mario `player LIKE 'Mario%'**

   

- code

  SELECT team1, team2, player FROM game JOIN goal
       ON (id = matchid )
             WHERE ( player LIKE 'Mario%')



5. **Show** `player`**,** `teamid`**,** `coach`**,** `gtime` **for all goals scored in the first 10 minutes** `gtime<=10`

   

- code

  SELECT player, teamid, coach, gtime FROM goal JOIN eteam
     ON (teamid = id )
        WHERE ( gtime <= 10)



6. **List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.**

   

- code

  SELECT mdate, teamname FROM game JOIN eteam
    ON (team1 = eteam.id)
       WHERE(coach = 'Fernando Santos') 



7. **List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'**

   

- code

  SELECT player FROM game JOIN goal
   ON (id = matchid )
      WHERE (stadium = 'National Stadium, Warsaw')



8. **Instead show the** **name** **of all players who scored a goal against Germany.**

   

- code

  SELECT DISTINCT player FROM game JOIN goal 
     ON ( matchid=id) 
        WHERE ((team1='GER' OR team2='GER') AND teamid != 'GER')

- 

9. **Show** **teamname** **and the total number of goals scored.**

   

- code

  SELECT teamname, COUNT(player) FROM eteam JOIN goal 
  ON ( id=teamid ) GROUP BY teamname

  

10. **Show the stadium and the number of goals scored in each stadium.**

    

- code

  SELECT stadium , COUNT(player) FROM game JOIN goal
   ON (id=matchid ) GROUP BY stadium



11. **For every match involving 'POL', show the matchid, date and the number of goals scored.**

    

- code

  SELECT matchid,mdate, COUNT(player) FROM game JOIN goal
     ON (matchid = id )
       WHERE (team1 = 'POL' OR team2 = 'POL') GROUP BY matchid



12. **For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'**

    

- code

  SELECT matchid, mdate , COUNT(player) FROM game JOIN goal
      ON (id=matchid)
         WHERE ((team1 = 'GER' OR team2 = 'GER') AND teamid = 'GER') GROUP BY matchid


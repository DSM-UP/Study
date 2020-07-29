1.1

```sql
SELECT matchid, player FROM goal 
  WHERE teamid = 'GER'
```

2.

```sql
SELECT id,stadium,team1,team2
  FROM game
WHERE id = 1012
```

3.

```sql
SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
WHERE teamid = 'GER'
```

4.

```sql
SELECT team1, team2, player FROM goal JOIN game ON (id = matchid)
WHERE player LIKE 'Mario%'
```

5.

```sql
SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam on (teamid = id)
 WHERE gtime<=10
```

6.

```sql
SELECT mdate, teamname FROM game JOIN eteam ON (team1 = eteam.id)
WHERE coach = 'Fernando Santos'
```

7.

```sql
SELECT player FROM goal JOIN game ON id=matchid
WHERE stadium = 'National Stadium, Warsaw';
```

8.

```sql
SELECT DISTINCT player
FROM game
JOIN goal ON matchid = id 
WHERE (team1='GER' OR team2='GER') AND teamid != 'GER'
```

9.

```sql
SELECT teamname, COUNT(teamid)
  FROM eteam JOIN goal ON id=teamid
 GROUP BY teamname
```

10.

```sql
SELECT stadium, COUNT(1) FROM goal JOIN game ON game.id = goal.matchid
GROUP BY stadium 
```

11.

```sql
SELECT matchid,mdate,COUNT(teamid)
 FROM game JOIN goal ON matchid = id 
 WHERE (team1 = 'POL' OR team2 = 'POL') GROUP BY matchid
```

12.

```sql
SELECT matchid, mdate, COUNT(teamid) FROM goal JOIN game ON (id = matchid)
WHERE teamid = 'GER' GROUP BY matchid
```


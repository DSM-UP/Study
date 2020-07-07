## SQLZOO



### SELECT basics

1. ```mysql
   SELECT population FROM world
     WHERE name = 'Germany'
   ```

2. ```mysql
   SELECT name, population FROM world
     WHERE name IN ('Sweden', 'Norway', 'Denmark');
   ```

3. ```
   SELECT name, area FROM world
     WHERE area BETWEEN 200000 AND 250000
   ```



### SELECT from WORLD

1. ```mysql
   SELECT name, continent, population FROM world
   ```

2. ```mysql
   SELECT name FROM world
   WHERE population > 200000000
   ```

3. ```msyql
   SELECT name, GDP/population  FROM world
   WHERE population > 200000000
   ```

4. ```mysql
   SELECT name, population/1000000 FROM world
   WHERE continent = "South America"
   ```

5. ```mysql
   SELECT name, population FROM world where name IN ('France', 'Germany', 'Italy')
   ```

6. ```mysql
   SELECT name FROM world WHERE name like 'United%'
   ```

7. ```mysql
   SELECT name, population, area FROM world WHERE area > 3000000 OR population > 250000000
   ```

8. ```mysql
   SELECT name, population, area FROM world WHERE area > 3000000 XOR population > 250000000
   ```

9. ```mysql
   SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2) FROM world WHERE continent = 'South America' 
   ```

10. ```mysql
    SELECT name, ROUND(GDP/population, -3) FROM world WHERE GDP > 1000000000000
    ```

11. ``` mysql
    SELECT name, capital FROM world WHERE LENGTH(name) = LENGTH(capital)
    ```

12. ```mysql
    SELECT name, capital FROM world WHERE LEFT(name, 1) = LEFT(capital, 1) and name != capital
    ```

13. ```mysql
    SELECT name FROM world WHERE name LIKE '%a%'  AND name LIKE '%E%' AND name LIKE '%i%'  AND name LIKE '%o%'  AND name LIKE '%u%' and name NOT LiKE'% %'
    ```



### SELECT from Nobel Tutorial

1. ```mysql
   SELECT yr, subject, winner
     FROM nobel
    WHERE yr = 1950
   ```

2. ```mysql
   SELECT winner
     FROM nobel
    WHERE yr = 1962
      AND subject = 'Literature'
   ```

3. ```mysql
   SELECT yr, subject FROM nobel WHERE winner='Albert Einstein'
   ```

4. ```mysql
   SELECT winner FROM nobel WHERE yr >= 2000 and subject = 'Peace'
   ```

5. ```mysql
   SELECT * FROM nobel WHERE 1980 <= yr and yr <= 1989 and subject = 'Literature'
   ```

6. ```mysql
   SELECT * FROM nobel
    WHERE winner IN ('Theodore Roosevelt',
                     'Woodrow Wilson',
                     'Jimmy Carter', 'Barack Obama'
   )
   ```

7. ```mysql
   SELECT winner FROM nobel WHERE winner Like'John %'
   ```

8. ```mysql
   SELECT * FROM nobel WHERE (subject = 'Physics' and yr = 1980) or (subject = 'Chemistry' and yr = 1984)
   ```

9. ```mysql
   SELECT * FROM nobel WHERE yr = 1980 and subject NOT IN ('Chemistry', 'Medicine')
   ```

10. ```mysql
    SELECT * FROM nobel WHERE (yr < 1910 and subject = 'Medicine') or (yr >= 2004 and subject = 'Literature')
    ```

11. ```mysql
    SELECT * FROM nobel WHERE winner = 'PETER GRÜNBERG'
    ```

12. ```mysql
    SELECT * FROM nobel WHERE winner = "EUGENE O'NEILL"
    ```

13. ```mysql
    SELECT winner, yr, subject FROM nobel WHERE winner LIKE 'Sir%' 
    ```

14. ```mysql
    SELECT winner, subject FROM nobel WHERE yr=1984
     ORDER BY CASE WHEN subject in ('Physics', 'Chemistry') THEN 1 ELSE 0 END, subject, winner
    ```



### SELECT within SELECT tutorial (2415 유시온 CutyApple)

1. ```mysql
   SELECT name FROM world
     WHERE population >
        (SELECT population FROM world WHERE name='Russia')
   ```
   
2. ```mysql
   SELECT name FROM world 
   	WHERE continent='Europe' AND gdp/population > (SELECT gdp/population
       	FROM world WHERE name = 'United Kingdom')
   ```
```
   
3. ```mysql
   SELECT name, continent FROM world 
   	WHERE continent = (SELECT continent FROM world WHERE name = 'Argentina') 
   		OR continent = (SELECT continent FROM world WHERE name = 'Australia') Order by (name)
```

4. ```mysql
   SELECT name, population FROM world 
   	WHERE population > (SELECT population FROM world WHERE name = 'Canada')
   		AND  population < (SELECT population FROM world WHERE name = 'Poland') 
   ```

5. ```mysql
   SELECT name, CONCAT(ROUND(100*population/(SELECT population FROM world WHERE name = 'Germany')), "%")
   FROM world
	WHERE continent = 'Europe'
   ```
   
6. ```mysql
   SELECT name 
   FROM world 
   	WHERE gdp >= ALL(SELECT gdp FROM world 
        WHERE gdp >= 0 AND continent='Europe') 
   			AND continent != 'Europe'
   ```
   
7. ```mysql
   SELECT continent, name, area 
   FROM world x
     WHERE area >= ALL(SELECT area FROM world y 
         WHERE y.continent=x.continent
             AND area > 0)
   ```

8. ```mysql
   SELECT continent, name 
   FROM world x
     WHERE name <= ALL(SELECT name FROM world y 
     WHERE y.continent = x.continent)
   ```
   
9. ```mysql
   SELECT name, continent, population
   FROM world x
   	WHERE 25000000  > ALL(SELECT population FROM world y 
           WHERE x.continent = y.continent AND y.population > 0)
   
   ```
10. ```mysql
    SELECT name, continent
        FROM world x
        	WHERE population > ALL(SELECT population*3 FROM world y 
                  WHERE x.continent = y.continent AND population > 0 AND y.name != x.name)
    ```

```
world(name, continent, area, population, gdp)
```



### SUM and COUNT

1. ```mysql
   SELECT SUM(population)
   FROM world;
   ```

2. ```mysql
   SELECT DISTINCT(continent)
   FROM world;
   ```

3. ```mysql
   SELECT SUM(gdp)
   FROM world
   WHERE continent = 'Africa'
   ```

4. ```mysql
   SELECT COUNT(area)
   FROM world
   WHERE area > 1000000
   ```

5. ```mysql
   SELECT SUM(population)
   FROM world
   WHERE name in ('Estonia', 'Latvia', 'Lithuania')
   ```

6. ```mysql
   SELECT DISTINCT(continent), COUNT(name)
   FROM world
   GROUP BY continent
   ```

7. ```mysql
   SELECT DISTINCT(continent), COUNT(name)
   FROM world
   WHERE population > 10000000
   GROUP BY continent 
   ```

8. ```mysql
   SELECT DISTINCT(continent)
   FROM world
   GROUP BY continent 
   HAVING SUM(population) > 100000000
   ```



### JOIN and UEFA EURO 2012

1. ```mysql
   SELECT matchid, player FROM goal 
   WHERE teamid = 'GER'
   ```

2. ```mysql
   SELECT id,stadium,team1,team2
   FROM game
   WHERE id = 1012
   ```

3. ```mysql
   SELECT player, teamid, stadium, mdate
   FROM game JOIN goal ON (id=matchid AND teamid='GER')
   ```

4. ```mysql
   SELECT team1, team2, player 
   FROM game JOIN goal g ON (id=matchid AND player LIKE 'Mario%')
   ```

5. ```mysql
   SELECT g.player, teamid, coach, gtime
   FROM goal g JOIN eteam 
   ON (teamid=id AND gtime<=10)
   ```

6. ```mysql
   SELECT mdate, teamname 
   FROM game JOIN eteam
   ON (team1=eteam.id AND coach='Fernando Santos')
   ```

7. ```mysql
   SELECT player
   FROM game ga JOIN goal go
   ON (ga.id = go.matchid AND stadium= 'National Stadium, Warsaw')
   ```

8. ```mysql
   SELECT DISTINCT(player)
   FROM game JOIN goal 
   ON (matchid = id AND (team1='GER' OR team2='GER') AND teamid != 'GER')
   ```

9. ```mysql
   SELECT teamname, COUNT(player)
   FROM eteam
   JOIN goal ON id=teamid
   GROUP BY teamname
   ```

10. ```mysql
    SELECT stadium, COUNT(player)
    FROM game
    JOIN goal ON id=matchid
    GROUP BY stadium
    ```

11. ```mysql
    SELECT matchid,mdate, COUNT(player)
    FROM game JOIN goal 
    ON (id=matchid AND (team1 = 'POL' OR team2 = 'POL'))
    GROUP BY matchid
    ```

12. ```mysql
    SELECT id, mdate, COUNT(player)
    FROM game JOIN goal 
    ON (id=matchid AND (team1 = 'GER' OR team2 = 'GER') AND teamid='GER')
    GROUP BY id, mdate
    ```

13. 
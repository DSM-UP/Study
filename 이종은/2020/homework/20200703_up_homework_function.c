#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>


typedef struct {
    int num;
    char blood[3];
    float eyes;
    int weight;

}Privacy;

int P_printf(Privacy* man);
int S_scanf(Privacy* man);

int main()
{
    int i;
    Privacy man[2];

    S_scanf(&man);
    P_printf(&man);
    
    /*for (i = 0; i < 2; i++)
    {
        scanf("%d %s %f %d", &man[i].num, &man[i].blood, &man[i].eyes, &man[i].weight); //함수로 만들기!
    }
    
    for (i = 0; i < 2; i++)
    {
        printf("%d %s %.1f %d", man[i].num, man[i].blood, man[i].eyes, man[i].weight);
        putchar('\n');
    }*/
    return 0;
}

int P_printf(Privacy* man)
{
    int i;
    for (i = 0; i < 2; i++)
    {
        printf("%d %s %.1f %d", man[i].num, man[i].blood, man[i].eyes, man[i].weight);
        putchar('\n');
    }
}

int S_scanf(Privacy* man)
{
    int i;
    for (i = 0; i < 2; i++)
    {
        scanf("%d %s %f %d", &man[i].num, &man[i].blood, &man[i].eyes, &man[i].weight);
    }
}
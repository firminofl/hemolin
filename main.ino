//Programa: Teste de Display LCD 16 x 2
//Autor: FILIPEFLOP
 
//Carrega a biblioteca LiquidCrystal
#include <LiquidCrystal.h>
long leitura = 0;
 
//Define os pinos que serão utilizados para ligação ao display
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
 
void setup()
{
 Serial.begin(9600);
  lcd.begin(16, 2);
}
 
void loop()
{
  leitura = 0;

    for(int i = 0; i < 25; i++){
    int sensorValue;
  sensorValue = analogRead(0);//connect UV sensors to Analog 0    
  Serial.println(sensorValue);//print the value to serial  
  leitura = leitura + sensorValue;
    }
    leitura = leitura / 25;
    leitura = leitura * 5;

  lcd.clear();
  //Limpa a tela
  /*lcd.clear();
  //Posiciona o cursor na coluna 3, linha 0;
  lcd.setCursor(3, 0);
  lcd.print("HEMOLIN ");
  lcd.setCursor(3, 1);
  lcd.print(leitura);
*/
if(leitura >= 15){
  lcd.setCursor(3, 0);
  lcd.print("ACIDO");
   lcd.setCursor(3, 1);
     lcd.print("DETECTADO ");
}
else {
   lcd.setCursor(3, 0);
  lcd.print("ACIDO");
    lcd.setCursor(3, 1);
    lcd.print("NAO DETECTADO");
}

    delay(300);
   
  //Rolagem para a esquerda
 /* for (int posicao = 0; posicao < 3; posicao++)
  {
    lcd.scrollDisplayLeft();
    delay(300);
  }
   
  //Rolagem para a direita
  for (int posicao = 0; posicao < 6; posicao++)
  {
    lcd.scrollDisplayRight();
    delay(300);
  }*/
}

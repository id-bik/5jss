let calculator = {
    read() {
      this.a = parseFloat(prompt("Введите первое число:", 0));
      this.b = parseFloat(prompt("Введите второе число:", 0));
      
      if (isNaN(this.a) || isNaN(this.b)) {
        alert("Некорректный ввод! Пожалуйста, введите числа.");
        this.read(); 
      }
    },
    
    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert("Сумма: " + calculator.sum());
  alert("Произведение: " + calculator.mul());


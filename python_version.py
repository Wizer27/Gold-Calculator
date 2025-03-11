def calculate_gold():
    try:
       
        col = int(input("Введите количество микросхем: " + '\n'))
        
   
        weights_input = input("Введите веса микросхем через запятую: " + '\n')
        weights = [float(w.strip()) for w in weights_input.split(',')]
        
        
        if len(weights) != col:
            print("Ошибка: Количество весов должно совпадать с количеством микросхем.")
            return
        

        total_gold = sum(weight * 0.03 / 100 for weight in weights)
        
       
        print(f"Общее количество золота: {total_gold:.4f} граммов")
    
    except ValueError:
        print("Ошибка: Введите корректные числовые значения.")


calculate_gold()

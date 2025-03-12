import streamlit as st
col = st.number_input("Enter the amount")
weight = st.text_input("Enter the weights(with ,)")
if weight != '':
    weights = [float(w.strip()) for w in weight.split(',')]
    if len(weights) != col:
        print("Ошибка")
    total_gold = sum(weight * 0.03 / 100 for weight in weights)   
    a = st.text(f"Общее количество золота: {total_gold:.4f} граммов") 

    

package com.example.calculadora_final

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    private lateinit var btn9: Button
    private lateinit var valores: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btn9.findViewById<Button>(R.id.btn9)
        valores.findViewById<TextView>(R.id.valores)

        btn9.setOnClickListener {
            valores.text = "O professor Alessandro é legal"
        }
    }
}
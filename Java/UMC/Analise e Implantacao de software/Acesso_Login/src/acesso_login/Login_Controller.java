/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package acesso_login;

import javax.swing.JOptionPane;


public class Login_Controller {
    Login_Model login_model = new Login_Model();
    
    
    public void logar(String usr,int senha){
        login_model.setLogin(usr);
        login_model.setSenha(senha);
        
        boolean status = login_model.validaLogin();
        if(status == true){
            new FormSistema().setVisible(status);
        }else{
            JOptionPane.showMessageDialog(null,"ususario ou senha incorreta");
            new FormLogin().setVisible(true);
        }
    }
    
    
}

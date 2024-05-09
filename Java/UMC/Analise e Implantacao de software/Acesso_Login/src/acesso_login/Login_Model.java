/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package acesso_login;

public class Login_Model {
    private String login;
    private int senha;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public int getSenha() {
        return senha;
    }

    public void setSenha(int senha) {
        this.senha = senha;
    }
    
    public boolean validaLogin(){
        if(this.login.equals("johnny") && (this.senha==123)){
        
        return true;
        }else{
          return false;
        }
    }
}

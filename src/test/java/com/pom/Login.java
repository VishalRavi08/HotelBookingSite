package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.bas.BaseClass;

public class Login extends BaseClass {

	//1.Declare the elements as private using @FindBy annotation
	//2.Generate Getters
	//3.Inside the Constructor initialize the driver and elements using PageFactory.initElements
	
//	WebDriver driver;
	
	@FindBy(id = "username")
	private WebElement username;		//declaration
	
	@FindBy(id = "password")
	private WebElement password;
	
	@FindBy(id = "login")
	private WebElement login;
	
	public WebElement getUsername() {
		return username;				//return
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin() {
		return login;
	}

	public Login() {	//each class should have it's driver
		
	PageFactory.initElements(driver, this);  //initializing elements
		
	}
	
}

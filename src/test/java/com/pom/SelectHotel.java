package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.bas.BaseClass;

public class SelectHotel extends BaseClass{
	
//	WebDriver driver;
	
	@FindBy(id = "radiobutton_0")
	private WebElement radio;
	
	@FindBy(id = "continue")
	private WebElement next;
	
	public WebElement getRadio() {
		return radio;
	}

	public WebElement getNext() {
		return next;
	}

	public SelectHotel() {
		PageFactory.initElements(driver, this);
	}
	
	

}

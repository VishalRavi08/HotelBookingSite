package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.bas.BaseClass;

public class Itinerary extends BaseClass {

//	WebDriver driver;
	
	@FindBy(id = "logout")
	private WebElement logout;

	public WebElement getLogout() {
		return logout;
	}
	
	public Itinerary() {
		PageFactory.initElements(driver, this);
	}
	
}

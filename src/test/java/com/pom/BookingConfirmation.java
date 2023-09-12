package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.bas.BaseClass;

public class BookingConfirmation extends BaseClass {

//	WebDriver driver;
	
	@FindBy(id = "my_itinerary")
	private WebElement itinerary;

	public WebElement getItinerary() {
		return itinerary;
	}
	
	public BookingConfirmation(){
		PageFactory.initElements(driver, this);
	}
	
}

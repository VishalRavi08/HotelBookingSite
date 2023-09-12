package com.stepdefinitionada;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.server.handler.SendKeys;

import com.bas.BaseClass;
import com.pom.BookAHotel;
import com.pom.BookingConfirmation;
import com.pom.Itinerary;
import com.pom.Login;
import com.pom.SearchHotel;
import com.pom.SelectHotel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionAda extends BaseClass {
	
	public static WebDriver driver;
	Login l;
	SearchHotel s;
	SelectHotel sh;
	BookAHotel b;
	Itinerary i;
	BookingConfirmation bc;

	@Given("user Launchs The Adactin Application")
	public void user_Launchs_The_Adactin_Application() throws InterruptedException {
		launchBrowser();
		launchUrl("http://adactinhotelapp.com/");
		maximize();
		Thread.sleep(3000);
	}

	@When("user Enters The Username In The InputBox")
	public void user_Enters_The_Username_In_The_InputBox() {
		l = new Login();
		sendValues(l.getUsername(), "ThorRang");
	}

	@When("user Enters The Password In The InputBox")
	public void user_Enters_The_Password_In_The_InputBox() {
		l = new Login();
		sendValues(l.getPassword(), "U6FF2E");
	}

	@Then("user Clicks The LoginButton And It Navigates To the SearchHotelPage")
	public void user_Clicks_The_LoginButton_And_It_Navigates_To_the_SearchHotelPage() {
		l = new Login();
		clickOnElement(l.getLogin());
	}

	@When("user Selects The Location From The Dropdown")
	public void user_Selects_The_Location_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getLocation(), "value", "Melbourne");
	}

	@When("user Selects The Hotels From The Dropdown")
	public void user_Selects_The_Hotels_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getHotels(), "value", "Hotel Cornice");		
	}

	@When("user Selects The RoomType From The Dropdown")
	public void user_Selects_The_RoomType_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getRoomType(), "value", "Deluxe");
	}

	@When("user Selects The NumberOfRooms From The Dropdown")
	public void user_Selects_The_NumberOfRooms_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getNoOfRooms(), "value", "1");
	}

	@When("user Enters The CheckInDate In The InputBox")
	public void user_Enters_The_CheckInDate_In_The_InputBox() {
		s = new SearchHotel();
		s.getCheckIn().clear();
		sendValues(s.getCheckIn(), "18/09/2023");
	}

	@When("user Enters The CheckOutDate In The InputBox")
	public void user_Enters_The_CheckOutDate_In_The_InputBox() {
		s = new SearchHotel();
		s.getCheckOut().clear();
		sendValues(s.getCheckOut(), "20/09/2023");
	}

	@When("user Selects The AdultsPerRoom From The Dropdown")
	public void user_Selects_The_AdultsPerRoom_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getAdults(), "value", "3");
	}

	@When("user Selects The ChildrenPerRoom From The Dropdown")
	public void user_Selects_The_ChildrenPerRoom_From_The_Dropdown() {
		s = new SearchHotel();
		singleDropDown(s.getChildren(), "value", "0");
	}

	@Then("user Clicks The SearchButton And It Navigates To The SelectHotelPage")
	public void user_Clicks_The_SearchButton_And_It_Navigates_To_The_SelectHotelPage() {
		s = new SearchHotel();
		clickOnElement(s.getSearch());
	}

	@When("user Selects The RadioButton")
	public void user_Selects_The_RadioButton() {
		sh = new SelectHotel();
		clickOnElement(sh.getRadio());
	}

	@Then("user Clicks The ContinueButton And It Navigates To The BookAHotelPage")
	public void user_Clicks_The_ContinueButton_And_It_Navigates_To_The_BookAHotelPage() {
		sh = new SelectHotel();
		clickOnElement(sh.getNext());
	}

	@When("user Enters The Firstname In The InputBox")
	public void user_Enters_The_Firstname_In_The_InputBox() {
		b = new BookAHotel();
		sendValues(b.getFirstName(), "Thor");
	}

	@When("user Enters The Lastname In The InputBox")
	public void user_Enters_The_Lastname_In_The_InputBox() {
		b = new BookAHotel();
		sendValues(b.getLastName(), "Rang");
	}

	@When("user Enters The BillingAddress In The InputBox")
	public void user_Enters_The_BillingAddress_In_The_InputBox() {
		b = new BookAHotel();
		sendValues(b.getBilladdress(), "Marvel Space");
	}

	@When("user Enters The CreditCardNo In The InputBox")
	public void user_Enters_The_CreditCardNo_In_The_InputBox() {
		b = new BookAHotel();
		sendValues(b.getCardno(), "8596321475214003");
	}

	@When("user Selects The CreditCardType From The Dropdown")
	public void user_Selects_The_CreditCardType_From_The_Dropdown() {
		b = new BookAHotel();
		singleDropDown(b.getCardtype(), "value", "MAST");
	}

	@When("user Selects The ExpiryMonth From The Dropdown")
	public void user_Selects_The_ExpiryMonth_From_The_Dropdown() {
		b = new BookAHotel();
		singleDropDown(b.getExpmonth(), "value", "4");
	}

	@When("user Selects The ExpiryYear From The Dropdown")
	public void user_Selects_The_ExpiryYear_From_The_Dropdown() {
		b = new BookAHotel();
		singleDropDown(b.getExpyear(), "value", "2022");
	}

	@When("user Enters The CVVNumber In The InputBox")
	public void user_Enters_The_CVVNumber_In_The_InputBox() {
		b = new BookAHotel();
		sendValues(b.getCvv(), "444");
	}

	@Then("user Clicks The BookNowButton And It Navigates To The BookingConfirmationPage")
	public void user_Clicks_The_BookNowButton_And_It_Navigates_To_The_BookingConfirmationPage() {
		b = new BookAHotel();
		clickOnElement(b.getOk());
	}

	@Then("user Clicks The MyItineraryButton And It Navigates To The BookedItineraryPage")
	public void user_Clicks_The_MyItineraryButton_And_It_Navigates_To_The_BookedItineraryPage() {
		bc = new BookingConfirmation();
		implicitWait();
		clickOnElement(bc.getItinerary());
	}

	@When("user Clicks The LogoutButton And Nagivates To The LoginAgainPage")
	public void user_Clicks_The_LogoutButton_And_Nagivates_To_The_LoginAgainPage() {
		i = new Itinerary();
		clickOnElement(i.getLogout());
	}

}

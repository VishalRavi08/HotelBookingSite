package com.run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Adactin.feature", 
				glue="com.stepdefinitionada", monochrome=true ,
				plugin={"pretty", 
						"html:Report/Cucumber_Report", 
		 				"json:Report/Cucumber.json"})

public class TestRunner {

}

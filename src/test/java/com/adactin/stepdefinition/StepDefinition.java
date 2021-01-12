package com.adactin.stepdefinition;


import org.openqa.selenium.WebDriver;

import com.adactin.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.pom.HomePage;
import com.adactin.runner.TestRunner;

import cucumber.api.java.en.*;

public class StepDefinition extends BaseClass{
	public static WebDriver driver = TestRunner.driver;
	
	@Given("^User launches the application$")
	public void user_launches_the_application() throws Throwable {
		// driver= getBrowser("chrome");//
		// getUrl("https://adactinhotelapp.com/");//
		//ConfigurationReader cr = new ConfigurationReader();//
		//String url = cr.getUrl();//
		//getUrl(url);//
		
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
		
	   }

  // @When("^User enter the valid username in the username field$")
	//public void user_enter_the_valid_username_in_the_username_field() throws Throwable {
		//HomePage hp =new HomePage(driver);
	//	InputToWebelement(hp.getUsername(),"manosh95");
	   
	//}

	//@When("^User enter the valid password in the password field$")
	//public void user_enter_the_valid_password_in_the_password_field() throws Throwable {
		//HomePage hp=new HomePage(driver);
	//	InputToWebelement(hp.getPassword(),"manosh95");
	//}
	
	@When("^User enter the valid \"([^\"]*)\" in the username field$")
	public void user_enter_the_valid_in_the_username_field(String username) throws Throwable {
		HomePage hp =new HomePage(driver);
		InputToWebelement(hp.getUsername(),username);
	    
	}

	//@When("^User enter the valid \"([^\"]*)\"\" in the password field$")
	//public void user_enter_the_valid_in_the_password_field(String password) throws Throwable {
		//HomePage hp =new HomePage(driver);
	   // InputToWebelement(hp.getPassword(),password);
	//}
	@When("^User enter the valid \"([^\"]*)\" in the password field$")
	public void user_enter_the_valid_in_the_password_field(String password) throws Throwable {
		HomePage hp = new HomePage(driver);
		InputToWebelement(hp.getPassword(), password);
	    
	}
	
	
	
	
	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		HomePage hp =new HomePage(driver);
		clickOnWebElement(hp.getLogin());
	}
	
	@Then("^User verifies whether the Homepage navigates to the Search Hotel Page$")
	public void user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page() throws Throwable {
	    
	}


		
	}


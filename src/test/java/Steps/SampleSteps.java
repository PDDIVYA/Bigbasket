package Steps;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SampleSteps {
	WebDriver driver;
	@Given("I want to open browser")
	public void i_want_to_open_browser() {
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
	}

	@Given("open url")
	public void open_url() {
	    driver.get("https://www.bigbasket.com/");
	}

	@Given("Click on signup\\/signin")
	public void click_on_signup_signin() {
		driver.findElement(By.xpath("(//a[@qa='loginLink'])[2]")).click();
	}

	@Given("Enter valid mobile number and OTP")
	public void enter_valid_mobile_number_and_OTP() throws Exception {
		driver.findElement(By.xpath("(//input[@type='text'])[1]")).sendKeys("8639133533");
		
		driver.findElement(By.xpath("(//button[@type='submit'])[1]")).click();	
		
		Thread.sleep(15000);
		
//		Scanner sc = new Scanner(System.in);
//		CharSequence OTP = sc.next();
//		Thread.sleep(15000);
//		
//		driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys(OTP);
	}

	@When("Click on Verify and Continue")
	public void click_on_Verify_and_Continue() {
		driver.findElement(By.xpath("(//button[@type='submit'])[1]")).click();
	}

	@When("Enter firstname lastname and emailid")
	public void enter_firstname_lastname_and_emailid() {
	    
	}

	@When("click on startshopping")
	public void click_on_startshopping() throws Exception {
		
		
	}

	@Then("Goto search")
	public void goto_search() throws Exception {
		
		
	}

	@Then("Search for Onion")
	public void search_for_Onion() throws Exception {
		Thread.sleep(20000);
		  WebElement searchbox = driver.findElement(By.xpath("//input[@qa='searchBar']"));
		  
		  JavascriptExecutor JS = (JavascriptExecutor) driver;
		  JS.executeScript("arguments[0].value='Onion';", searchbox);
		  
		  searchbox.sendKeys(Keys.ENTER); 
	}

	@Then("Select the Quantity and click on Add")
	public void select_the_Quantity_and_click_on_Add() {
		driver.findElement(By.cssSelector(".btn.btn-add.col-xs-9")).click();
	}

	@Then("Print message Item is added successfully in the cart")
	public void print_message_Item_is_added_successfully_in_the_cart() {
		System.out.println("Print message Item is added successfully in the cart");
	}

}

package stepdefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginSteps {
    public static WebDriver driver;
    @Given("^I'm on google search page$")
    public void i_m_on_google_search_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\LoginTraining\\drivers\\chromedriver.exe");
        //System.out.println("on google page");
        driver = new ChromeDriver();
        driver.get("https://www.google.com/");
    }
    @When("^I search for \"([^\"]*)\"$")
    public void i_search_for(String arg1) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(arg1);
        element.submit();
        //System.out.println(arg1);
    }

    @Then("^the page title should contain word \"([^\"]*)\"$")
    public void the_page_title_should_contain_word(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @Then("^the first line on the result page should contain \"([^\"]*)\"$")
    public void the_first_line_on_the_result_page_should_contain(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @Given("^i navigate to \"([^\"]*)\"$")
    public void i_navigate_to(String URL) throws Throwable {
        driver.get("https://s1.demo.opensourcecms.com/wordpress/wp-login.php");
    }

    @When("^i enter username and password$")
    public void i_enter_username_and_password() throws Throwable {
        driver.findElement(By.cssSelector("#user_login")).sendKeys("opensourcecms");
        driver.findElement(By.cssSelector("#user_pass")).sendKeys(" opensourcecms");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

    }

    @Then("^i click on Login button$")
    public void i_click_on_Login_button() throws Throwable {
            driver.findElement(By.cssSelector("#wp-submit")).click();
    }


}

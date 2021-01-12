package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties p;
	public ConfigurationReader() throws FileNotFoundException, IOException {
		File f = new File("src\\test\\java\\com\\adactin\\property\\Adactin.property");
		FileInputStream fis= new FileInputStream(f);
	    p = new Properties();
		p.load(fis);
	}

     public String getBrowserName() {
    	 String browsername = p.getProperty("BrowserName");
    	 System.out.println(browsername);
    	 return browsername;
	}
     public String getUrl() {
		String url = p.getProperty("Url");
		System.out.println(url);
		return url;

	}
     public static void main(String[] args) throws FileNotFoundException, IOException {
		ConfigurationReader cr  = new ConfigurationReader();
		cr.getBrowserName();
		cr.getUrl();
	}
     
}



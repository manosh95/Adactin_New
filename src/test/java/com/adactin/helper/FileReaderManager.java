package com.adactin.helper;

import java.io.FileNotFoundException;
import java.io.IOException;

public class FileReaderManager {
	
	public FileReaderManager() {
	
	}

	public static FileReaderManager getInstance() {
		FileReaderManager frm = new FileReaderManager();
		return frm;
	}
	
	public ConfigurationReader getCrInstance() throws FileNotFoundException, IOException {
    ConfigurationReader cr = new ConfigurationReader();
    return cr;
	}
}

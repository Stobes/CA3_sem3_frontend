const Readme = () => {
    return (
    <ul>
        <h3>
            CREATE AND COPY REPOSITORY
        </h3>
        <li>
        1. First go to Github.com, sign up and create a Repository.
         Then search and find the backend repository of the project
        </li>
        <li>
        2. When you have chosen the repo, click on Code (green button), and then copy the link.
        </li>
        <li>
        3. Open up your terminal and navigate to your own repo. You can do this with the command “ls” or “ls -a” to be more specific. Then you “cd ‘folder name’”.
         You have now chosen this folder and you can now move on.
        </li>
        <li>
        4. The URL you copied on GitHub can now be used with this command “git clone ‘URL’ ”. 
        Now you copy the entire repo into your own repository.
        </li>
        <h3>
        DOWNLOADS
        </h3>
        <li>
        1. You have to install JAVA on your device.
        </li>
        <li>
        2. You have to install either IntelliJ or Netbeans on your device.
        </li>
        <li>
        3. You have to install a JDK on your device.
        </li>
        <li>
        4. You have to install Tomcat on your device.
        </li>
        <li>
        5. You have to install mySQL workbench on your device.
        </li>
        <li>
        6. You have to install Docker on your device
        </li>
        <li>
        6. You have to install Docker on your device
        </li>
        <li>
        8. You have to install Nginx. 
        </li>
        <h3>
        OPEN PROJECT AND CREATE DATABASE
        </h3>
        <li>
        1. Open up your project in IntelliJ
        </li>
        <li>
        2. Change the Config. To Tomcat.  
        </li>
        <li>
        3. Create a database for the project
        </li>
        <li>
        4. In the persistence.xml file change the persistence-unit “pu” to use the new database.
        </li>
        <li>
        5. Create the database and tables, using the create strategy in the persistence-file.
        </li>
        <li>
        6.  Clean and build the project
        </li>
        <li>
        7.  Run the project by pressing the green run button.
        </li>
        <h3>
        FRONT END PART
        </h3>
        <li>
        1. Choose the frontend repo and copy the url.
        </li>
        <li>
        2. Create a folder and open a terminal in the folder
        </li>
        <li>
        3. Run the command git clone “URL”.
        </li>
        <li>
        4. In the terminal navigate to your new folder and cd into the folder
        </li>
        <li>
        5. Then type the command “code .” .
        </li>
        <li>
        6. To open the project in a browser you can open a new terminal in your new folder and run the command “npm start”. 
        </li>
    </ul>
    );
}

export default Readme
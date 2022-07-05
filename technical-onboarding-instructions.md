
# Technical Onboarding Instructions

## Section 0: Prerequisites 

To get started, complete the following items if you haven’t already 

- Create a [GitHub](https://github.com/) account  

- Update your Microsoft Learn Student Ambassador Profile with your GitHub Account  

- Instructions on updating your Student Ambassador Profile are available here 

- Create an Azure for Students account or use your existing Azure Subscription if you have one (Alpha Student Ambassadors and above can redeem credits here: https://aka.ms/vsben)

- Download [Visual Studio Code](https://code.visualstudio.com/Download) and the [Azure Static Web Apps extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) for Visual Studio Code 

- Download [GitHub Desktop](https://desktop.github.com/)  

By completing this Technical Onboarding Process, you will grow your skills with Azure, you will become trained on the use of GitHub, you will complete one of the requirements for program advancement, and you will also get a certificate that will recognize your new technical abilities! 
 
As you are navigating the technical onboarding, please reference the Technical Onboarding channel to ask questions and/or share issues you encounter. Make sure to review other Ambassadors’ questions to help or get help!  

## Section 1: Create a repository 

**Why do this section?**

Microsoft Cloud Advocates have created a template GitHub repository (or repo) specially for Microsoft Learn Student Ambassadors to use for this technical onboarding experience. When you append /generate to the end of the repo URL, you are telling GitHub that you want to generate a new repository, and use the provided repo as a template for the repo you generate. This template repository has the content and styling definitions that allow you to create a web application that can serve as your online resume. 

This article uses a GitHub template repository to make it easy for you to get started. The template features a starter app used to deploy using Azure Static Web Apps. 

1. Navigate to the following location to create a new repository: https://github.com/microsoft/SATechnicalOnboarding/generate 

2. Name your repository SATechnicalOnboarding. Note: Azure Static Web Apps requires at least one HTML file to create a web app. The repository you create in this step includes a single index.html file. 

3. Select Create repository from template. 

## Section 2: Clone the repository 

**Why do this section?**

Previously you created a GitHub repository that housed the materials needed to create your web app.  Now you’ll create a local copy (or clone) so you can modify the code on your system. Cloning repos is an important part of a developer’s work. Imagine you’re a software engineer in a large company, and all the engineers at your company are working on the same codebase. You wouldn’t want everyone to make changes to the source code at the same time – so everyone clones the source code to their own local repository, makes and tests the necessary changes, and pushes those changes to the source code when they are ready. This makes for greater organizational collaboration. 

1. Open the GitHub Desktop App 

2. Navigate to File > Clone Repository 

3. Open the URL tab 

4. Input https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/SATechnicalOnboarding.git into the URL input, and select Clone 

Note: Make note of the location where the repository is saved.  

## Section 3: Create a static web app 

**Why do this section?**

With the copy created locally, you’re all set to start working on your code and site. Now you’ll explore how to deploy your site to the cloud. You’ll use Azure Static Web Apps to host your site. A static web app (SWA) is a site built with JavaScript, HTML, CSS and potentially other tools, and SWAs are becoming increasingly common. Using Azure Static Web Apps will allow you to quickly post your site (and resume) to the world. You can explore more Azure Tips and Tricks: Static Web Apps to learn more.  

1. Open Visual Studio Code and go to File > Open Folder to open the cloned repository in the editor.  

2. Inside Visual Studio Code, select the Azure logo in the Activity Bar to open the Azure extensions window. 

- Note: You are required to sign in to Azure and GitHub in Visual Studio Code to continue. If you are not already authenticated, the extension will prompt you to sign in to both services during the creation process. 

3. Under the Static Web Apps label, select the plus sign. 

4. The command palette opens at the top of the editor and prompts you to select a subscription name. Select your subscription and press <Enter>. 

5. Next, name your application. Type SATechnicalOnboarding and press <Enter>. 

5. Select a region close to you. 
- Note: Azure Static Web Apps globally distributes your static assets. The region you select determines where your optional staging environments and API function app will be located. 

6. Select Custom  Enter /src as the location for the application files and press <Enter>. This app does not produce a build output. Ensure the build output location is empty and press <Enter>. 

7. Select “Open Actions in GitHub.” This will launch the GitHub Actions tab in your browser. You will see the workflow run as it is creating the app. When your webapp is built and deployed, you will see a check for the workflow run.   

- Once the app is created, navigate back to Visual Studio Code - a confirmation notification is shown there. The Visual Studio Code extension also reports the build status to you as the deployment is in progress – and will update you when your app is built and deployed.  

- Once the deployment is complete, you can navigate directly to your website. 

8. To view the website in the browser, right-click on the project in the Static Web Apps extension, and select Browse Site. 

If your build has failed you may see this in your Actions tab on GitHub:
 ![Failed build in GitHub actions](https://user-images.githubusercontent.com/32169182/175279158-50787c0d-2c28-4140-9724-0449023e8ae1.png)
 
 To fix this you can click the pencil icon beside the workflow run and click View workflow file
 ![View workflow file](https://user-images.githubusercontent.com/32169182/175279494-92985faa-a4aa-42b1-8f61-50cf5032816a.png)
 
 Then change line 30 to be /src instead of /
 ![Change app location](https://user-images.githubusercontent.com/32169182/175279576-fc87decb-99d0-41b7-8be3-ab9a56d9ca2a.png)



## Section 4: Customize Your Static Web App 

**Why do this section? **

With your app deployed, let’s turn our attention to updating it with your information. You want to add in your name, contact information, background, social media links, etc. You can do all of this in the HTML by modifying the provided template and replacing the various placeholders. For this exercise you will only update your name, but you should feel free to make whatever changes you might like! 

We will now do a small customization step customize your webapp you can edit it in VS Code and push changes using GitHub Desktop  

1. Navigate to the Explorer Tab in Visual Studio Code   

2. Navigate to the “src” folder, and within it, the “index.html” file  

3. Find the “Your Name” Heading. Replace “Your Name” with your real name.   

4. Save your changes in VS Code   

5. Navigate to GitHub Desktop and ensure that your Current Repository is your Ambassador-SWA-Pilot repo (GitHub Desktop should reflect your recent changes like below)  

6. In the bottom left of GitHub Desktop, give your changes a title (like “Added My Name” and add a description  

7. Select “Commit to Main”  

8. Now, push your changes to GitHub by selecting “Push Origin”    
  
9. Navigate to Actions in GitHub and view your web app’s build progress  

10. When the build is complete, refresh your app and the changes should be reflected  

## Section 5: Complete Your Next Step in GitHub Training with Reviewing Pull Requests 

**Why do this section?**
  
By completing this lab, you will learn the foundation of collaboration on GitHub – one of the most popular platforms for collaborative development. To cite the Learning Lab Directly, “This course will dive into how you can get your best work done by identifying when and how to request a review, how to perform a review for someone else's pull request, and other awesome collaboration methods. All great projects start with collaboration. Pull requests are the foundation of teamwork on GitHub — and pull request reviews give you the ability to work together and discuss changes specific to a pull request by commenting, requesting changes, or approving.” 

1. Navigate to the Reviewing Pull Requests Learning Lab and sign into your GitHub account to start the 200 Level GitHub training. 

2. Select ‘Start free course’ and complete all course steps of the lab. 

3. Navigate back to the Reviewing Pull Requests Lab page to confirm you have completed all course steps of the Lab. Input https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/reviewing-a-pull-request/pull/4 into the search bar of your browser to view the “change title on README #4” pull request, scroll down, and confirm that you see the following comment from the github-learning-lab bot at the end of the conversation in the pull request. 

## Section 6: Submit your onboarding details, feedback, and get your certificate of completion 

You’ve made it to the end! The last step is to fill out the [Onboarding Completion Form](https://forms.office.com/r/UnJgmjap4U) (using your @studentambassadors account) to provide a few details about you, your webapp, the link to your final pull requests from the GitHub Learning Lab, and your experience with this process. 
 
You will be advanced to the Beta milestone (once you have also hosted an event or actively participated in a social impact league project) after a Program Team member verifies that 1) Your Student Ambassador Profile is updated with your GitHub Account, 2) Your GitHub web app / Online Resume is complete, and 3) Your Learning Lab is complete.  

Thank you for completing this exercise!  

 ## Optional: Creating an Azure Static Web App from an existing GitHub respository
 
 Video demonstration: https://youtu.be/koA61KD6VzM
 
 If you would like to create an Azure Static Web App from an existing GitHub respository on your GitHub account, you can also do that. 
 
1. Navigate to [Azure](https://portal.azure.com) and log in.
2. Search for Static Web Apps and choose Static Web Apps
 ![Search for Azure Static Web Apps](https://user-images.githubusercontent.com/32169182/175283447-7d744c7d-020d-462b-8607-f6046b5bb245.png)
3. Click 'Create'
 ![CREATE button](https://user-images.githubusercontent.com/32169182/175283630-d5e5bb35-53ba-4d2d-92d1-853d3f606371.png)
4. Choose your Azure subscription (yours may be called Visual Studio Enterprise or Azure for Students), then click Create New for your resource group and give it a name, for example AzureStaticWebAppDemo
 ![Resource group name: Azure Static Web App Demo](https://user-images.githubusercontent.com/32169182/175283908-1295a754-5dec-4a9b-9f6f-3d6b6e3be03c.png)
5. Give it a name, choose Free for the plan type and choose a location close to you
![Name, plan, location and then Review + create](https://user-images.githubusercontent.com/32169182/175284149-935024bf-d909-4e45-9803-d1a17c6f49b0.png)
6. Under deployment details choose GitHub, and 'Sign in with GitHub'
7. Choose your organisation (your account), and your respository, you can leave Build presets blank, and then click 'Review + create'
![Choose repository and organisation, blank bulid presets, 'Review + create'](https://user-images.githubusercontent.com/32169182/175284980-f1905c24-5052-45b8-81d8-7f859c841aae.png)
8. Click 'Go to Resource' once it has finished deploying, and you should have a link which you can navigate to, to visit your website
 ![Go to resource and website link](https://user-images.githubusercontent.com/32169182/175285525-9474a473-35d1-4ed6-a4f0-40e409140d37.png)
 ![Live Azure Static Web App](https://user-images.githubusercontent.com/32169182/175285726-574904fd-ea8c-4c4a-8689-d21e7ba98904.png)
9. Navigating to your respository you can see your action has been created for you, once it has finished running you can refresh the link you visited and it should be deployed
![GitHub Action](https://user-images.githubusercontent.com/32169182/175285267-28494cce-9b10-427c-b1b5-857777b7d363.png)





 
 
 

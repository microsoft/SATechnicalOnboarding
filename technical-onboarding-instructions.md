# 🚀 Technical Onboarding Instructions

## 📋 Section 0: Prerequisites 

To get started, complete the following items if you haven’t already:

- Create a [GitHub](https://github.com/) account
- Update your Microsoft Learn Student Ambassador Profile with your GitHub Account. [Learn how to update your profile here](https://stdntpartners.sharepoint.com/sites/SAProgramHandbook/SitePages/Navigating-the-Website.aspx)
- Create an [Azure for Students account](https://azure.microsoft.com/free/students) or use your existing Azure Subscription if you have one (Alpha Student Ambassadors and above can redeem credits [here](https://aka.ms/vsben))

By completing this Technical Onboarding Process, you will:

- 🌟 Become trained on the use of GitHub including GitHub Codespaces and GitHub Copilot
- 📈 Complete one of the requirements for Student Ambassador program advancement
- 🌐 Create your very own personalized Portfolio website
- 🏆 Get a certificate that will recognize your new technical abilities!

For any questions or issues, reference the [Technical Onboarding GitHub Discussions](https://github.com/microsoft/SATechnicalOnboarding/discussions) and engage with other Ambassadors.

> **Note:** Technical Onboarding was updated on April 18, 2023. See this [Discussions post](https://github.com/microsoft/SATechnicalOnboarding/discussions/27) for more details.

## 🌐 Section 1: Create your own JavaScript Portfolio Site with GitHub Codespaces and Copilot

### **Why do this section?**

Microsoft Cloud Advocates have created a template GitHub repository for this Technical Onboarding experience. This template includes your own version of some starter code and a fully set up development environment in GitHub Codespaces.

In this exercise, you will:

1. Set up your GitHub Codespace
2. Create your Portfolio site
3. Customize your site with GitHub Copilot
4. Deploy your site to the cloud with Azure Static Web Apps

> A static web app (SWA) is a site built with JavaScript, HTML, CSS, and other tools. SWAs are becoming increasingly common. Using Azure Static Web Apps will allow you to quickly post your Portfolio site to the world. Learn more about Static Web Apps in [this Microsoft Learn module](https://learn.microsoft.com/en-us/training/paths/azure-static-web-apps/).

Find the template repository and instructions to create your own Portfolio site [here](https://github.com/github-education-resources/codespaces-project-template-js).

- Follow the instructions in this template repository.
- For the Microsoft Learn Student Ambassador Technical Onboarding, you **must** choose the [Azure Static Web Apps option](https://github.com/education/codespaces-project-template-js#azure-static-web-apps) to deploy your Portfolio site.
- Submit the URL to your customized Profile site to complete [the Technical Onboarding completion form](https://forms.office.com/r/UnJgmjap4U).

## 💡 Section 2: Complete Your Next Step in GitHub Training with Reviewing Pull Requests 

### **Why do this section?**

By completing this Microsoft Learn Module, you will learn the foundation of collaboration on GitHub – one of the most popular platforms for collaborative development.

1. Navigate to the ["Manage repository changes by using pull requests on GitHub"](https://docs.microsoft.com/en-us/learn/modules/manage-changes-pull-requests-github/) Learn module.
2. Complete all 5 units, including the exercise on GitHub in unit 3 and the Knowledge Check in unit 4.
3. Navigate back to the Learn module page to confirm you have completed all steps of the module.

![Module Completion](https://github.com/microsoft/SATechnicalOnboarding/assets/66111735/6f74d0c4-abff-4c73-9dc3-e95833f2f6ca)

4. Confirm that the pull request you have been interacting with has been merged on GitHub.

![Pull Request Merged](https://user-images.githubusercontent.com/21200448/187707103-86d5a5a2-fb0c-4037-90ff-8b0a085f13ab.png)

## ✅ Section 3: Submit your onboarding details, feedback, and get your certificate of completion 

Congratulations! You've made it to the end! The last step is to fill out the [Onboarding Completion Form](https://forms.office.com/r/UnJgmjap4U) (using your @studentambassadors account) to provide a few details about you, your Profile site, the link to your final pull requests from the GitHub Learn module, and your experience with this process.

You will be advanced to the Beta milestone (once you have also hosted an event or actively participated in a social impact league project) after a Program Team member verifies that:

1. Your Student Ambassador Profile is updated with your GitHub Account.
2. Your Portfolio site is complete and deployed with Azure Static Web Apps.
3. Your GitHub Learn module is complete.

Thank you for completing this exercise!

## 🎥 Optional: Creating an Azure Static Web App from an existing GitHub repository

[Video demonstration](https://youtu.be/koA61KD6VzM)

If you would like to create an Azure Static Web App from an existing GitHub repository on your GitHub account, you can follow these steps:

1. Navigate to [Azure](https://portal.azure.com) and log in.
2. Search for Static Web Apps and choose Static Web Apps.

![Search Static Web Apps](https://user-images.githubusercontent.com/32169182/175283447-7d744c7d-020d-462b-8607-f6046b5bb245.png)

3. Click 'Create'.

![Create Static Web App](https://user-images.githubusercontent.com/32169182/175283630-d5e5bb35-53ba-4d2d-92d1-853d3f606371.png)

4. Choose your Azure subscription, create a new resource group, and give it a name.

![Create Resource Group](https://user-images.githubusercontent.com/32169182/175283908-1295a754-5dec-4a9b-9f6f-3d6b6e3be03c.png)

5. Name your app, choose Free for the plan type, and select a location close to you.

![Plan Type](https://user-images.githubusercontent.com/32169182/175284149-935024bf-d909-4e45-9803-d1a17c6f49b0.png)

6. Under deployment details, choose GitHub and 'Sign in with GitHub'.
7. Choose your organization (your account) and your repository, leave Build presets blank, and click 'Review + create'.

![Review + Create](https://user-images.githubusercontent.com/32169182/175284980-f1905c24-5052-45b8-81d8-7f859c841aae.png)

8. Choose `React` as your Build Preset.

![Change Build Preset](https://github.com/microsoft/SATechnicalOnboarding/assets/101401469/0ef7bcb2-3937-4f26-9834-38fae18c5b19)

9. Change the output location from the default `build` to `dist`.

![Change Build Location](https://github.com/microsoft/SATechnicalOnboarding/assets/101401469/0f067bff-607c-4186-b36b-834bbad46d97)

10. Click 'Go to Resource' once it has finished deploying, and you should have a link to visit your website.

![Go to Resource](https://user-images.githubusercontent.com/32169182/175285525-9474a473-35d1-4ed6-a4f0-40e409140d37.png)
![Deployed Site](https://user-images.githubusercontent.com/32169182/175285726-574904fd-ea8c-4c4a-8689-d21e7ba98904.png)

11. Check your repository to see that your action has been created. Once it has finished running, refresh the link you visited and your site should be deployed.

![Repository Action](https://user-images.githubusercontent.com/32169182/175285267-28494cce-9b10-427c-b1b5-857777b7d363.png)

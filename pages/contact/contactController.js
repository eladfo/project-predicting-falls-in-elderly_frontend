angular.module("myApp")
.controller("contactController", function ($scope, $http , $window) {


    var mail = new MailMessage(emailFrom, "test.test.com")
    {
        var body = "Your message : [Ipaddress]/Views/ForgotPassword.html";
        mail.Subject = "Forgot password";
        mail.Body = bodyy;
        mail.IsBodyHtml = false;
        var smtp = new SmtpClient();
        smtp.Host = "smtp.gmail.com";
        smtp.EnableSsl = true;
        smtp.UseDefaultCredentials = false;
        smtp.Credentials = new NetworkCredential(emailFrom, emailPwd);
        smtp.Port = 587;
        smtp.Send(mail);
        return true;
    }


    // $.ajax({
    //     type: "POST",
    //     url: "Service.asmx/EmailNotification",
    //     data: "{}",
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function (data)
    //     {

    //     },
    //     error: function (XHR, errStatus, errorThrown) {
    //         var err = JSON.parse(XHR.responseText);
    //         errorMessage = err.Message;
    //         alert(errorMessage);
    //     }
    // });
});
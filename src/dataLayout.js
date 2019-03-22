const Layout = {
    Head: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>    
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />    
        <title>Responsive Email Creator by USACD</title>    
        <style type="text/css">
            .ReadMsgBody {
                width: 100%;
                background-color: #ffffff;
            }
    
            .ExternalClass {
                width: 100%;
                background-color: #ffffff;
            }
    
            body {
                width: 100%;
                background-color: #ffffff;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                font-family: Georgia, Times, serif
            }
    
            table {
                border-collapse: collapse;
            }
        </style>
    </head>    
    <body style="font-family: Arial, Helvetica, sans-serif">`,
    HeadResponsive: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>    
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />    
        <title>Responsive Email Created by USACD</title>    
        <style type="text/css">
            .ReadMsgBody {
                width: 100%;
                background-color: #ffffff;
            }
    
            .ExternalClass {
                width: 100%;
                background-color: #ffffff;
            }
    
            body {
                width: 100%;
                background-color: #ffffff;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                font-family: Georgia, Times, serif
            }
    
            table {
                border-collapse: collapse;
            }
    
            @media only screen and (max-width: 640px) {
                .deviceWidth {
                    width: 440px !important;
                    padding: 0;
                }
    
                .center {
                    text-align: center !important;
                }
            }
    
            @media only screen and (max-width: 479px) {
                .deviceWidth {
                    width: 280px !important;
                    padding: 0;
                }
    
                .center {
                    text-align: center !important;
                }
            }
        </style>
    </head>    
    <body style="font-family: Arial, Helvetica, sans-serif">`,
    Footer: `<div style="display:none; white-space:nowrap; font:15px courier; color:#ffffff;">
		- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </div>
        </body>
        </html>`
}

export default Layout;
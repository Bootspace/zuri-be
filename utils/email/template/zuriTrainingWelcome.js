exports.message = async () => {
  const html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Account Welcome</title>
      <style type="text/css">
        a { text-decoration: none; outline: none; }
        @media (max-width: 649px) {
          .o_col-full { max-width: 100% !important; }
          .o_col-half { max-width: 50% !important; }
          .o_hide-lg { display: inline-block !important; font-size: inherit !important; max-height: none !important; line-height: inherit !important; overflow: visible !important; width: auto !important; visibility: visible !important; }
          .o_hide-xs, .o_hide-xs.o_col_i { display: none !important; font-size: 0 !important; max-height: 0 !important; width: 0 !important; line-height: 0 !important; overflow: hidden !important; visibility: hidden !important; height: 0 !important; }
          .o_xs-center { text-align: center !important; }
          .o_xs-left { text-align: left !important; }
          .o_xs-right { text-align: left !important; }
          table.o_xs-left { margin-left: 0 !important; margin-right: auto !important; float: none !important; }
          table.o_xs-right { margin-left: auto !important; margin-right: 0 !important; float: none !important; }
          table.o_xs-center { margin-left: auto !important; margin-right: auto !important; float: none !important; }
          h1.o_heading { font-size: 32px !important; line-height: 41px !important; }
          h2.o_heading { font-size: 26px !important; line-height: 37px !important; }
          h3.o_heading { font-size: 20px !important; line-height: 30px !important; }
          .o_xs-py-md { padding-top: 24px !important; padding-bottom: 24px !important; }
          .o_xs-pt-xs { padding-top: 8px !important; }
          .o_xs-pb-xs { padding-bottom: 8px !important; }
        }
        @media screen {
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          .o_sans, .o_heading { font-family: "Roboto", sans-serif !important; }
          .o_heading, strong, b { font-weight: 700 !important; }
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
        }
      </style>
      <!--[if mso]>
      <style>
        table { border-collapse: collapse; }
        .o_col { float: left; }
      </style>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body class="o_body o_bg-light" style="width: 100%;margin: 0px;padding: 0px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #dbe5ea;">
      <!-- preview-text -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_hide" align="center" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Email Summary (Hidden)</td>
          </tr>
        </tbody>
      </table>
      <!-- header-white -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs o_pt-lg o_xs-pt-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;padding-top: 32px;">
              <!--[if mso]><table width="800" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block-lg" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 800px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white o_px o_py-md o_br-t o_sans o_text" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;background-color: #ffffff;border-radius: 4px 4px 0px 0px;padding-left: 16px;padding-right: 16px;padding-top: 24px;padding-bottom: 24px;">
                      <p style="margin-top: 0px;margin-bottom: 0px;"><a class="o_text-primary" href="https://training.zuri.team/" style="text-decoration: none;outline: none;color: #126de5;"><svg width="200" height="200" viewBox="0 0 122 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="122" height="104" fill="white"/>
                        <path d="M14.6953 55.9922V55.9375L20.1016 48.3516V46.6328H12.0391V48.6484H17.1172V48.7031L11.8203 56.2422V58H20.1172V55.9922H14.6953ZM26.9453 50.1875V53.9766C26.9453 54.7031 26.7734 55.2656 26.4453 55.6562C26.1094 56.0547 25.6953 56.25 25.2109 56.25C24.7109 56.25 24.3516 56.1094 24.1328 55.8281C23.9141 55.5469 23.8125 55.0469 23.8125 54.3438V50.1875H21.7188V54.8906C21.7188 55.4766 21.7812 55.9766 21.9219 56.3984C22.0625 56.8203 22.2578 57.1562 22.5234 57.4062C22.7891 57.6562 23.0859 57.8438 23.4297 57.9609C23.7656 58.0781 24.1562 58.1328 24.5938 58.1328C25.0391 58.1328 25.4609 58.0469 25.8594 57.8594C26.2578 57.6719 26.6094 57.4062 26.9141 57.0469H26.9453V58H29.0391V50.1875H26.9453ZM35.5703 50.0547C35.1016 50.0547 34.6719 50.1719 34.2656 50.3906C33.8594 50.6094 33.5078 50.9297 33.2109 51.3359H33.1875V50.1875H31.0938V58H33.1875V54.375C33.1875 53.7812 33.3594 53.2891 33.7109 52.9062C34.0625 52.5312 34.5547 52.3359 35.1797 52.3359C35.3359 52.3359 35.5234 52.3438 35.7344 52.3594V50.0625C35.7031 50.0625 35.6484 50.0547 35.5703 50.0547ZM38.2344 49.0859C38.5859 49.0859 38.8906 48.9609 39.1484 48.7109C39.3984 48.4609 39.5312 48.1641 39.5312 47.8047C39.5312 47.4609 39.3984 47.1562 39.1484 46.9062C38.8906 46.6562 38.5859 46.5312 38.2344 46.5312C37.875 46.5312 37.5625 46.6562 37.3125 46.9062C37.0625 47.1562 36.9375 47.4609 36.9375 47.8047C36.9375 48.0391 36.9922 48.2578 37.1094 48.4531C37.2188 48.6484 37.375 48.8047 37.5781 48.9141C37.7812 49.0312 38 49.0859 38.2344 49.0859ZM37.1875 58H39.2812V50.1875H37.1875V58ZM52.4766 58H54.7188V48.6484H57.8672V46.6328H49.3438V48.6484H52.4766V58ZM62.7109 50.0547C62.2422 50.0547 61.8125 50.1719 61.4062 50.3906C61 50.6094 60.6484 50.9297 60.3516 51.3359H60.3281V50.1875H58.2344V58H60.3281V54.375C60.3281 53.7812 60.5 53.2891 60.8516 52.9062C61.2031 52.5312 61.6953 52.3359 62.3203 52.3359C62.4766 52.3359 62.6641 52.3438 62.875 52.3594V50.0625C62.8438 50.0625 62.7891 50.0547 62.7109 50.0547ZM69.6328 50.1875V51.0703H69.6016C69.0156 50.3984 68.25 50.0547 67.2969 50.0547C66.7812 50.0547 66.2891 50.1562 65.8359 50.3594C65.3828 50.5625 64.9922 50.8438 64.6641 51.1953C64.3359 51.5547 64.0859 51.9844 63.8984 52.4844C63.7109 52.9922 63.6172 53.5391 63.6172 54.1172C63.6172 54.7109 63.7109 55.2656 63.8984 55.7656C64.0859 56.2656 64.3438 56.6953 64.6719 57.0391C65 57.3828 65.3984 57.6562 65.8594 57.8438C66.3203 58.0391 66.8203 58.1328 67.3594 58.1328C68.3594 58.1328 69.1328 57.7734 69.6953 57.0547H69.7344V58H71.7266V50.1875H69.6328ZM67.7422 56.2578C67.1484 56.2578 66.6719 56.0625 66.2969 55.6641C65.9219 55.2734 65.7422 54.7578 65.7422 54.125C65.7422 53.4688 65.9297 52.9453 66.3125 52.5391C66.6953 52.1406 67.1719 51.9375 67.75 51.9375C68.3125 51.9375 68.7812 52.1484 69.1562 52.5625C69.5312 52.9844 69.7188 53.5 69.7188 54.125C69.7188 54.7578 69.5234 55.2734 69.1484 55.6641C68.7656 56.0625 68.2969 56.2578 67.7422 56.2578ZM74.9219 49.0859C75.2734 49.0859 75.5781 48.9609 75.8359 48.7109C76.0859 48.4609 76.2188 48.1641 76.2188 47.8047C76.2188 47.4609 76.0859 47.1562 75.8359 46.9062C75.5781 46.6562 75.2734 46.5312 74.9219 46.5312C74.5625 46.5312 74.25 46.6562 74 46.9062C73.75 47.1562 73.625 47.4609 73.625 47.8047C73.625 48.0391 73.6797 48.2578 73.7969 48.4531C73.9062 48.6484 74.0625 48.8047 74.2656 48.9141C74.4688 49.0312 74.6875 49.0859 74.9219 49.0859ZM73.875 58H75.9688V50.1875H73.875V58ZM82.8125 50.0547C82.3281 50.0547 81.8672 50.1562 81.4297 50.3516C80.9922 50.5469 80.6172 50.8281 80.3047 51.1953H80.2812V50.1875H78.1875V58H80.2812V54.0703C80.2812 53.3906 80.4375 52.8672 80.7578 52.4922C81.0781 52.125 81.5078 51.9375 82.0547 51.9375C82.5625 51.9375 82.9375 52.0859 83.1875 52.375C83.4297 52.6719 83.5547 53.1719 83.5547 53.8906V58.0078H85.6484V53.3672C85.6484 52.7812 85.5781 52.2734 85.4453 51.8359C85.3047 51.4062 85.1094 51.0625 84.8516 50.8047C84.5938 50.5547 84.2969 50.3672 83.9609 50.2422C83.625 50.1172 83.2422 50.0547 82.8125 50.0547ZM88.7969 49.0859C89.1484 49.0859 89.4531 48.9609 89.7109 48.7109C89.9609 48.4609 90.0938 48.1641 90.0938 47.8047C90.0938 47.4609 89.9609 47.1562 89.7109 46.9062C89.4531 46.6562 89.1484 46.5312 88.7969 46.5312C88.4375 46.5312 88.125 46.6562 87.875 46.9062C87.625 47.1562 87.5 47.4609 87.5 47.8047C87.5 48.0391 87.5547 48.2578 87.6719 48.4531C87.7812 48.6484 87.9375 48.8047 88.1406 48.9141C88.3438 49.0312 88.5625 49.0859 88.7969 49.0859ZM87.75 58H89.8438V50.1875H87.75V58ZM96.6875 50.0547C96.2031 50.0547 95.7422 50.1562 95.3047 50.3516C94.8672 50.5469 94.4922 50.8281 94.1797 51.1953H94.1562V50.1875H92.0625V58H94.1562V54.0703C94.1562 53.3906 94.3125 52.8672 94.6328 52.4922C94.9531 52.125 95.3828 51.9375 95.9297 51.9375C96.4375 51.9375 96.8125 52.0859 97.0625 52.375C97.3047 52.6719 97.4297 53.1719 97.4297 53.8906V58.0078H99.5234V53.3672C99.5234 52.7812 99.4531 52.2734 99.3203 51.8359C99.1797 51.4062 98.9844 51.0625 98.7266 50.8047C98.4688 50.5547 98.1719 50.3672 97.8359 50.2422C97.5 50.1172 97.1172 50.0547 96.6875 50.0547ZM107.07 50.1875V50.9922H107.031C106.727 50.6875 106.375 50.4531 105.969 50.2969C105.562 50.1406 105.141 50.0547 104.695 50.0547C104.008 50.0547 103.383 50.2266 102.836 50.5625C102.281 50.9062 101.852 51.375 101.539 51.9766C101.227 52.5859 101.078 53.2656 101.078 54.0156C101.078 54.7656 101.234 55.4297 101.555 56.0156C101.875 56.6016 102.32 57.0547 102.883 57.375C103.445 57.7031 104.086 57.8594 104.805 57.8594C105.742 57.8594 106.5 57.5547 107.078 56.9453H107.117V57.7344C107.117 58.2344 106.922 58.6484 106.539 58.9766C106.148 59.3047 105.609 59.4688 104.906 59.4688C104.438 59.4688 104.008 59.4062 103.609 59.2812C103.203 59.1562 102.789 58.9766 102.367 58.7422L101.883 60.5078C102.797 61.0391 103.867 61.2969 105.086 61.2969C105.672 61.2969 106.195 61.2344 106.656 61.0938C107.117 60.9609 107.508 60.7734 107.82 60.5234C108.133 60.2812 108.391 59.9844 108.594 59.6328C108.797 59.2812 108.938 58.8984 109.031 58.4766C109.117 58.0625 109.164 57.6016 109.164 57.1016V50.1875H107.07ZM105.188 55.9609C104.961 55.9609 104.75 55.9375 104.547 55.875C104.344 55.8125 104.164 55.7266 104 55.6094C103.836 55.5 103.695 55.3594 103.578 55.1953C103.453 55.0391 103.359 54.8516 103.297 54.6406C103.234 54.4297 103.203 54.2031 103.203 53.9531C103.203 53.3672 103.383 52.8906 103.758 52.5156C104.125 52.1484 104.602 51.9609 105.188 51.9609C105.75 51.9609 106.219 52.1484 106.594 52.5078C106.969 52.875 107.164 53.3516 107.164 53.9375C107.164 54.5312 106.977 55.0156 106.609 55.3906C106.234 55.7734 105.766 55.9609 105.188 55.9609Z" fill="black"/>
                        <path d="M46.2461 58.1992C46.7734 58.1992 47.2305 58.0117 47.6055 57.6367C47.9805 57.2617 48.1797 56.8164 48.1797 56.2891C48.1797 55.7734 47.9805 55.3164 47.6055 54.9414C47.2305 54.5664 46.7734 54.3672 46.2461 54.3672C45.6953 54.3672 45.2266 54.5547 44.8516 54.9297C44.4766 55.3047 44.2891 55.7617 44.2891 56.2891C44.2891 56.8281 44.4766 57.2734 44.8516 57.6484C45.2266 58.0234 45.6953 58.1992 46.2461 58.1992Z" fill="#E7332B"/>
                        </svg>
                        </a></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- hero-white-button -->
      <!-- content -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="margin-top: -70px;">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <!--[if mso]><table width="800" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block-lg" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 800px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white o_px-md o_py" align="center" style="background-color: #ffffff;padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;">
                      <!--[if mso]><table width="584" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td align="center"><![endif]-->
                      <div class="o_col-6s o_sans o_text o_text-secondary o_center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;max-width: 584px;color: #424651;text-align: center;">
                        <h2> Welcome to Zuri x I4G Training  </h2>

                        Your registration was successful.
                         
                        This is where you will learn all that you need to get started in tech, your journey into this exciting new horizon starts here! <br />

Every necessary resource has been put in place for you to have a smooth ride as you embark on this journey with us. Please make best use of the opportunity to learn, grow, make new friends, and have fun.
                        
                        <p style="text-align: left;">This message contains the first set of all information needed to make your learning experience a fruitful one:</p>
                        
            
                        <ul style="text-align: left;">
                        
                          <li>Join the slack workspace by <a href="https://training.zuri.team/join-the-workspace">clicking here</a></li>
                          <li>Once you are in, update your profile, include a username (it should be a single word with no spaces), add your official name and use a  profile picture that clearly shows your face (this is very important)</li>
                          <li>Introduce yourself in the #introduction channel</li>
                          <li>Read the welcome messages on #announcement channel and follow all instruction</li>
                          <li>We understand that you are new to the ecosystem, hence we have provided you with handful of experienced mentors that will guide you throughout the journey. Feel free to ask them any question and clarifications.</li>
                          <li>weet or post this on instagram to create awareness for others:</li>
                        </ul>
                        <p style="text-align: left;"> “I have just been accepted into the #I4GHNGScholarship and I’ll be embarking on a journey to learn how to code (or design) with @ingressive4Good and @thezuriteam”</p>

                      
                        <p style="text-align: left;">Note that this training involves a couple of activities, including assignments on growth and learning initiatives which we expect you to partake actively .</p>

                        <p style="text-align: left;">Once again, Our team will be on hand to assist throughout the period of the program.</p>
 
                        <p style="text-align: left;">We look forward to seeing all that you achieve together over the next couple of months.</p>
                        
                        
                        
                        <p style="text-align: left;">Regards,</p> 
                        
                        <p style="text-align: left;">Zuri x I4G</p>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- spacer-lg -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <!--[if mso]><table width="800" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block-lg" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 800px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white" style="font-size: 48px;line-height: 48px;height: 48px;background-color: #ffffff;">&nbsp; </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- footer-light-2cols -->
     
    </body>
  </html> 
  `;
  return html;
};

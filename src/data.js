const Blocks = [{
  label: "Row 1 logo",
  value: "Row1Logo",
  slug: "R1L",
  html: `<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;">
          <tbody>
            <tr>
              <td width="100%" bgcolor="#ffffff">
                <table border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth">
                  <tbody>
                    <tr>
                      <td style="padding:15px; text-align:right;" class="right"><a href="#"><img
                            src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>`,
  blockProps: {
    align: 'right',
    bkgColor: "",
    padding: "15px",
    textAlign: "right"
  }
},
{
  label: "Row 2 logo",
  value: "Row2Logo",
  slug: "R2L",
  html: `<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;">
            <tbody>
              <tr>
                <td width="100%" bgcolor="#ffffff">
                  <table border="0" cellpadding="0" cellspacing="0" align="left" width="49%">
                    <tbody>
                      <tr>
                        <td style="padding:15px;text-align:left;" class="left"><a href="#"><img
                              src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" align="right" width="49%">
                    <tbody>
                      <tr>
                        <td style="padding:15px;text-align:right;" class="right"><a href="#"><img
                              src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>`,
  blockProps: {
    leftBlock: {
      align: "alignSelect",
      bkgColor: "",
      padding: "0",
      textAlign: "left"
    },
    rightBlock: {
      align: "right",
      bkgColor: "",
      padding: "0",
      textAlign: "right"
    }
  }
},
{
  label: "Full width Image",
  value: "FullWidthImage",
  slug: "FWI",
  html: `<table width="600" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff"
          style="margin:0 auto;">
          <tbody>
            <tr>
              <td valign="top" style="padding:0" bgcolor="#ffffff">
                <a href="#">
                  <img class="deviceWidth" src="https://placehold.it/600x150?text=IMAGE" width="100%" alt="" border="0" style="display: block;" />
                </a></td>
            </tr>
          </tbody>
        </table>`,
  blockProps: {
    bkgColor: "",
    padding: "0"
  }
},
{
  label: "Full width Text",
  value: "FullWidthText",
  slug: "FWT",
  html: `<table width="600" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff"
          style="margin:0 auto;">
          <tr>
            <td style="font-size: 14px; color: #000000; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 17px; vertical-align: top; padding:15px" bgcolor="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </td>
          </tr>
        </table>`,
  blockProps: {
    bkgColor: "",
    padding: "0",
    textAlign: "left"
  }
},
{
  label: "Spacer",
  value: "Spacer",
  slug: "SPC",
  html: `<table width="600" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff"
              style="margin:0 auto;">
              <tr>
                <td height="15" style="font-size: 15px; line-height: 15px;"></td>
              </tr>
            </table>`,
  blockProps: {
    height: "15"
  }
},
{
  label: "Row 1 Button",
  value: "Row1Button",
  slug: "R1B",
  html: `<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;">
          <tbody>
            <tr>
              <td width="100%" bgcolor="#ffffff" style="padding: 15px 0px;">
                <table border="0" cellpadding="0" cellspacing="0" align="center">
                  <tbody>
                    <tr>
                      <td style="padding:15px 30px" bgcolor="#dddddd" class="center">
                        <a href="#" style="text-decoration: none; color: #000000; font-family: Arial, Helvetica, sans-serif;">BUTTON</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>`,
  blockProps: {
    align: "center",
    bkgColor: "",
    padding: "0"
  }
},
{
  label: "Row 2 Columns",
  value: "Row2Columns",
  slug: "R2C",
  html: `<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" bgcolor="#ffffff" style="margin:0 auto;">
          <tr>
              <td class="center noPadding" style="padding:10px 10px 0">

                  <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" class="deviceWidth">
                      <tr>
                          <td align="center">
                          <img width="265" src="https://placehold.it/265x160?text=IMAGE" alt="" border="0" style="width: 265px" class="deviceWidth" />
                          </td>
                      </tr>
                      <tr>
                          <td style="font-size: 14px; color: #959595; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 17px; vertical-align: top; padding:10px 12px">

                              <table style="border-bottom: 1px solid #333">
                                  <tr>
                                      <td valign="top" style="padding:0 10px 10px 0">
                                          <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" align="left" />
                                      </td>
                                      <td valign="middle" style="padding:0 10px 10px 0"><a href="#" style="text-decoration: none; font-size: 16px;line-height:19px; color: #363636; font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Two column - text below</a>
                                      </td>
                                  </tr>
                              </table>
                              <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                          </td>
                      </tr>
                  </table>

                  <table width="48%" border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth">
                    <tr>
                        <td align="center">
                        <img width="265" src="https://placehold.it/265x160?text=IMAGE" alt="" border="0" style="width: 265px" class="deviceWidth" />
                        </td>
                    </tr>
                      <tr>
                          <td style="font-size: 14px; color: #959595; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 17px; vertical-align: top; padding:10px 12px">

                              <table style="border-bottom: 1px solid #333">
                                  <tr>
                                      <td valign="top" style="padding:0 10px 10px 0">
                                          <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" align="left" />
                                      </td>
                                      <td valign="middle" style="padding:0 10px 10px 0"><a href="#" style="text-decoration: none; font-size: 16px;line-height: 17px; color: #363636; font-weight: bold; font-family:Arial, Helvetica, sans-serif;">Two column - text below</a>
                                      </td>
                                  </tr>
                              </table>

                              <p>Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                          </td>
                      </tr>
                  </table>

              </td>
          </tr>
      </table>`,
  blockProps: {
    align: "center",
    bkgColor: "",
    padding: "0"
  }
},
{
  label: "Row 4 Elements",
  value: "Row4Elements",
  slug: "R4E",
  html: `	<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth"
            style="margin:0 auto;">
            <tr>
              <td width="100%" bgcolor="#ffffff" style="font-size: 14px;line-height: 16px;padding: 0 0 15px 0"
                class="deviceWidth noPadding">

                <table width="100%" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="left"
                  style="margin:0 auto;">
                  <tr>
                    <td width="100%">
                      <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" style="margin:0"
                        class="deviceWidth">
                        <tr>
                          <td align="left" valign="top" width="44" style="padding: 0 10px 0 15px;">
                            <img src="https://placehold.it/50x50?text=A" alt="A" border="0" align="left" />
                          </td>
                          <td align="left" valign="top" width="90%"
                            style="font-size: 12px;line-height: 14px;padding-top: 5px;height: 65px;font-family: Arial, Helvetica, sans-serif;">
                            <b
                              style="color:#e04831;font-family: Arial, Helvetica, sans-serif;">Lorem</b><br>
                            Iste natus error sit voluptatem accusantium doloremque
                          </td>
                        </tr>
                      </table>
                      <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" style="margin:0"
                        class="deviceWidth">
                        <tr>
                          <td align="left" valign="top" width="44" style="padding: 0 10px 0 15px;">
                            <img src="https://placehold.it/50x50?text=B" alt="B" border="0" align="left" />
                          </td>
                          <td align="left" valign="top" width="90%"
                            style="font-size: 12px;line-height: 14px;padding-top: 5px;height: 65px;font-family: Arial, Helvetica, sans-serif;">
                            <b
                              style="color:#e04831;font-family: Arial, Helvetica, sans-serif;">Lorem</b><br>
                            Iste natus error sit voluptatem accusantium doloremque
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td width="100%">
                      <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" style="margin:0"
                        class="deviceWidth">
                        <tr>
                          <td align="left" valign="top" width="44" style="padding: 0 10px 0 15px;">
                            <img src="https://placehold.it/50x50?text=C" alt="C" border="0" align="left" />
                          </td>
                          <td align="left" valign="top" width="90%"
                            style="font-size: 12px;line-height: 14px;padding-top: 5px;;height: 65px;font-family: Arial, Helvetica, sans-serif;">
                            <b
                              style="color:#e04831;font-family: Arial, Helvetica, sans-serif;">Lorem</b><br>
                            Iste natus error sit voluptatem accusantium doloremque
                          </td>
                        </tr>
                      </table>
                      <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" style="margin:0"
                        class="deviceWidth">
                        <tr>
                          <td align="left" valign="top" width="44" style="padding: 0 10px 0 15px;">
                            <img src="https://placehold.it/50x50?text=D" alt="D" border="0" align="left" />
                          </td>
                          <td align="left" valign="top" width="90%"
                            style="font-size: 12px;line-height: 14px;padding-top: 5px;height: 65px;font-family: Arial, Helvetica, sans-serif;">
                            <b style="color:#e04831;font-family: Arial, Helvetica, sans-serif;">
                              Lorem</b><br>
                            Iste natus error sit voluptatem accusantium doloremque
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>`,
  blockProps: {
    align: "center",
    bkgColor: "",
    padding: "0"
  }
}
];

export default Blocks;
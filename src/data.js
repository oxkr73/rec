const Blocks = [{
    label: "Row 1 logo",
    value: "Row1Logo",
    slug: "R1L",
    html: '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;"><tbody><tr><td width="100%" bgcolor="#ffffff"><table border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td></tr></tbody></table></td></tr></tbody></table>',
    blockProps: {
      align: '<div className="form-group"><label>Align</label><select ref="{this.globalAlign}" name="global-align" defaultValue="center"><option value="center">center</option><option value="left">left</option><option value="right">right</option></select></div>',
      bkgColor: "",
      padding: "15px",
      textAlign: "right"
    }
  },
  {
    label: "Row 2 logo",
    value: "Row2Logo",
    slug: "R2L",
    html: '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;"><tbody><tr><td width="100%" bgcolor="#ffffff"><table border="0" cellpadding="0" cellspacing="0" align="left"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" align="right"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=IMAGE" alt="" border="0" /></a></td></tr></tbody></table></td></tr></tbody></table>',
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
    html: '<table width="600"  class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#eeeeed" style="margin:0 auto;"><tbody><tr><td valign="top" style="padding:0" bgcolor="#ffffff"><a href="#"><img  class="deviceWidth" src="https://placehold.it/580x150?text=IMAGE" alt="" border="0" style="display: block; border-radius: 4px;" /></a></td></tr></tbody></table>',
    blockProps: {
      bkgColor: "",
      padding: "0"
    }
  },
  {
    label: "Full width Text",
    value: "FullWidthText",
    slug: "FWT",
    html: '<table width="600" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" style="margin:0 auto;"> <tr> <td style="font-size: 14px; color: #000000; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 26px; vertical-align: top; padding:15px" bgcolor="#eeeeed"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </td></tr></table>',
    blockProps: {
      bkgColor: "",
      padding: "0",
      textAlign: "left"}
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
      height: "15"}
  },
  {
    label: "Row 1 Button",
    value: "Row1Button",
    slug: "R1B",
    html: '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;"><tbody><tr><td width="100%" bgcolor="#ffffff"><table border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth"><tbody><tr><td style="padding:15px 30px" class="center"><a href="#">BUTTON</a></td></tr></tbody></table></td></tr></tbody></table>',
    blockProps: {
      align: "center",
      bkgColor: "",
      padding: "0"
    }
  }
];

export default Blocks;
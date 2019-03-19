const Blocks = [
  {
    label: "Row 1 logo",
    value: "Row1Logo",
    slug: "R1L",
    html:
      '<table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;"><tbody><tr><td width="100%" bgcolor="#ffffff"><table border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=LOGO" alt="" border="0" /></a></td></tr></tbody></table></td></tr></tbody></table>',
    blockProps: {
      align:
        '<div className="form-group"><label>Align</label><select ref="{this.globalAlign}" name="global-align" defaultValue="center"><option value="center">center</option><option value="left">left</option><option value="right">right</option></select></div>',
      bkgColor: "",
      padding: "0",
      textAlign: "right"
    }
  },
  {
    label: "Row 2 logo",
    value: "Row2Logo",
    slug: "R2L",
    html:
      '<table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;"><tbody><tr><td width="100%" bgcolor="#ffffff"><table border="0" cellpadding="0" cellspacing="0" align="left"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=LOGO" alt="" border="0" /></a></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" align="right"><tbody><tr><td style="padding:10px 20px" class="center"><a href="#"><img src="https://placehold.it/120x40?text=LOGO" alt="" border="0" /></a></td></tr></tbody></table></td></tr></tbody></table>',
    blockProps: {
      leftBlock: {
        align: "left",
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
    label: "Full width image",
    value: "FullWidthImage",
    slug: "FWI",
    html:
      '<table width="580"  class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#eeeeed" style="margin:0 auto;"><tbody><tr><td valign="top" style="padding:0" bgcolor="#ffffff"><a href="#"><img  class="deviceWidth" src="https://placehold.it/580x150?text=BANNER" alt="" border="0" style="display: block; border-radius: 4px;" /></a></td></tr></tbody></table>'
  }
];

export default Blocks;

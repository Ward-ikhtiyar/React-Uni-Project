import React from "react";
import "./download_section.css";
import { Download, PhoneAndroid } from "@mui/icons-material";

export default function DownloadAppSection() {
  return (
    <section class="app-download">
  <div class="text-content">
    <h2> Download Our App</h2>
    <p>
      Take EasyRent with you wherever you go. Search properties, schedule viewings,
      and manage your rentals right from your phone.
    </p>
    <div class="buttons">
      <div className="under-ios">
      <a  class="btn" id="ios">⬇ Download for iOS</a>
      </div>
      <a  target="_blank" href="https://github.com/Dada6x/easyrent/releases/download/wardtest/easyRent.apk" class="btn"  >⬇ Download for Android</a>
      
      
    </div>
  </div>
  <div class="graphic" >
    <div class="phone-icon">
    <PhoneAndroid sx={{scale:'200%',color:'var(--app-blue)',marginTop:'10px'}}/>
    </div>
    <div class="download-icon">
      <Download/>
    </div>
  </div>
</section>
  );
}

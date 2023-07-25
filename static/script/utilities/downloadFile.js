// // This code not supportable in firefox
// import downloadableList from "../data/downloadDict.json" assert { type: "json" };

// Download file
export function downloadFile() {
  var downloadableList;

  // Fetching json data
  fetch("./static/script/data/downloadDict.json")
    .then((res) => res.json())
    .then((data) => {
      downloadableList = data;
    });

  // Add listener to each downloadable element
  document.querySelectorAll(".download").forEach((element) => {
    element.addEventListener("click", (e) => {
      let downloadElement = downloadableList[element.getAttribute("id")];
      download(downloadElement);
    });
  });
}

function download(downloadElement) {
  // Get download element detail
  let downloadName = downloadElement["name"];
  let downloadPath = downloadElement["path"];
  let downloadType = downloadElement["mimeType"];

  // Sending request to read data of download file
  let request = new XMLHttpRequest();
  request.open("GET", downloadPath, true);
  request.responseType = "blob";
  request.onload = function () {
    //Convert the Byte Data to BLOB object.
    let blob = new Blob([request.response], { type: downloadType });

    //Check the Browser type and download the File.
    let isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, downloadPath);
    } else {
      let url = window.URL || window.webkitURL;
      let urlLink = url.createObjectURL(blob);

      // Create a link to download file
      let link = window.document.createElement("a");
      link.href = urlLink;
      link.download = downloadName;
      link.target = "_blank";

      // Set display to none to hide the link
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(urlLink);
    }
  };
  request.send();
}

function findIP(str) {
  const re = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?/g;
  let result = [];
  let match;
  while ((match = re.exec(str)) !== null) {
    result.push(match[0].split("."));
  }
  console.log("length", result.length)
  console.log("rawresult", result)

  // cleaning the port numbers from IP addresses, must be (port <= 65535)
  let noGiantPortNumbers = []
  for (let i = 0; i < result.length; i++) {
    let pair = result[i][3].split(":", 2)
    if (
      !(pair.length > 1 && pair[1] > 65535)
    ) {
      noGiantPortNumbers.push(result[i]);
    }
  }
  result = noGiantPortNumbers
  // cleaning the leading zeros in strings , which represent numbers of 0-255, which are part of the IP address
  let noLeadingZeros = []
  for (let i = 0; i < result.length; i++) {
    let r = result[i];
    if (
      !(
        r[0][0] == "0" && r[0].length > 1
        || r[1][0] == "0" && r[1].length > 1
        || r[2][0] == "0" && r[2].length > 1
        || r[3][0] == "0" && r[3].split(":", 1)[0].length > 1 // try to separate port number from IP address
      )
    ) {
      noLeadingZeros.push(r);
    }
  }
  result = noLeadingZeros

  // cleaning for the numbers that are greater than 255, which are part of the IP address

  let noGiantNumbers = []
  for (let i = 0; i < result.length; i++) {
    let r = result[i];
    if (
      !(
        r[0] > 255
        || r[1] > 255
        || r[2] > 255
        || r[3].split(":", 1)[0] > 255 // just for case to try separate port number from IP address
      )
    ) {
      noGiantNumbers.push(r);
    }
  }
  result = noGiantNumbers.map((r) => r.join("."));

  // console.log("result", result)
  return result;
}


// const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split
// htpp://wrong/url hello %$& wf* ][???? http://correct/url?correct=yes ??[}???? https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2
// ssages has become an accepted part of many cultures, as happened earlier with emailing. htt://[1] This makes texting a quick and http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234
// for example, to order products or 10.1.23.7 http://www_example.com/ 255.255.255.000 09.09.09.09
// services fromhttps://regex-performance.github.io/exercises.html 3...3 0.0.0.0:22 0.0.0.0:68768
// this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact with automated systems,https:// regex -performance.github.io/ exercises.html172.01.123.999:1234
// https//nan-academy.github.io/js-training/?page=editor#data.nested impolite or inappropriate (e.g., calling very late at night orhttp://localhost/exercises
// https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient),
// http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot texting does not require the caller and recipient to both be free at the same moment0.0.0.0`

// console.log(findIP(dataSet));

// Create a function named findIP, that returns an array of valid IP addresses from a given string. These addresses may or may not have a port.

// For the IP part, the syntax will be as follows, where x is a number from 0-255. Values with leading zeros are not valid:

// x.x.x.x
// Don't forget to learn about the syntax of ports. But remember, the maximum TCP port number is 65,535.

// For this task, you only need to concern yourself with <host> and <port>. Don't worry about <scheme> or anything else.


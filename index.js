const nodemailer = require("nodemailer");


let jsonData = `
{
    "ĐẠT": [
        {
            "NGÀY PHỎNG VẤN": "20/11/2021",
            "THỜI GIAN BẮT ĐẦU PV": "9 giờ 15 phút",
            "HỌ VÀ TÊN ": "A",
            "BAN": "A",
            "EMAIL ": "A@gmail.com",
            "SĐT TK": "A",
            "LINK FB TK": "https://www.facebook.com/A"
        }
    ],
    "CHƯA ĐẠT": [
        {
            "HỌ VÀ TÊN ": "A",
            "BAN": "A",
            "EMAIL ": "A@gmail.com",
        }
    ]
}
`
let finalData =  JSON.parse(jsonData)
let count = 0;

  const sendPassEmail = async (target) => {
      const asyncAwaitSend = async() => {
        try {
        await timeout(15000);
		setTimeout(async () => {
            
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, 
                pool: true,// true for 465, false for other ports
                auth: {
                  user: "a@gmail.com", // generated ethereal user
                  pass: "a", // generated ethereal password
                },
              });
            
            let res = await transporter.sendMail({
                from: "CLB GUITAR Y DƯỢC",
                to:   target.email,
                pool: true,
                subject: `CASTING BAN ${target.group} - CLB GUITAR Y DƯỢC`,
                html: `
                <p>Th&acirc;n gửi <strong>${target.name}</strong>,</p>
                <p>Lời đầu ti&ecirc;n, <strong>CLB Guitar Y Dược</strong> xin ch&acirc;n th&agrave;nh cảm ơn bạn v&igrave; đ&atilde; d&agrave;nh thời gian quan t&acirc;m v&agrave; nộp đơn cho đợt tuyển th&agrave;nh vi&ecirc;n lần n&agrave;y của <strong>CLB</strong>. Ch&uacute;ng m&igrave;nh rất vui khi nhận được rất nhiều c&acirc;u trả lời hết sức ấn tượng, s&aacute;ng tạo qua lời chia sẻ của bạn.</p>
                <p>Sau thời gian c&acirc;n nhắc xem x&eacute;t kỹ lưỡng giữa c&aacute;c trưởng ban v&agrave; ph&oacute; ban, ch&uacute;ng m&igrave;nh rất vui khi được th&ocirc;ng b&aacute;o:</p>
                <p style="color:red;">CH&Uacute;C MỪNG BẠN Đ&Atilde; <strong>VƯỢT QUA V&Ograve;NG 1</strong>, BAN<strong> ${target.group} </strong>CỦA ĐỢT <strong>TUYỂN TH&Agrave;NH VI&Ecirc;N GYD</strong> LẦN N&Agrave;Y!</p>
                <p>Để tiến gần hơn với ng&ocirc;i nh&agrave; chung <strong>"NGƯỜI TRONG GIA Đ&Igrave;NH"</strong>, c&aacute;c bạn sẽ c&oacute; một buổi <mark><strong>PHỎNG VẤN ONLINE</strong></mark> qua <mark><strong>MICROSOFT TEAMS</strong></mark> v&agrave; để buổi phỏng vấn được diễn ra su&ocirc;n sẻ, mong bạn h&atilde;y d&agrave;nh một ch&uacute;t thời gian đọc qua một số th&ocirc;ng tin <strong>lưu &yacute; </strong>cho buổi phỏng vấn nh&eacute;:</p>
                <ol>
                <li>Ng&agrave;y phỏng vấn: <mark><strong>${target.date}</strong></mark></li>
                <li>Thời gian bắt đầu phỏng vấn:<mark><strong> ${target.time} </strong></mark></li>
                <li>V&agrave;o ph&ograve;ng phỏng vấn tr&ecirc;n TEAMS bằng m&atilde; Code: <mark><strong>1ifae8a</strong></mark> (link hướng dẫn: <a href="https://drive.google.com/file/d/1a-b2yyWK6asIF5bd9PhHCtdPeR7DA84K/view?usp=sharing">JOIN TEAMS</a>)</li>
                <li><strong>LƯU &Yacute;</strong> khi phỏng vấn:&nbsp; <a href="https://docs.google.com/document/d/1ILNhu06tB2VLqhbvZo2LBWC19ySuSUFuykyqroBAaBE/edit?usp=sharing">LƯU &Yacute; </a></li>
                <li>Nếu c&oacute; bất kỳ thắc mắc về ng&agrave;y phỏng vấn, bạn h&atilde;y li&ecirc;n hệ với thư k&yacute; ban theo địa chỉ: <em><u>${target.emailTK} - ${target.phoneTK}</u></em></li>
                <li>Hạn phản hồi với c&aacute;c thư k&yacute;: <strong>19h ng&agrave;y 19/11/2021</strong>.</li>
                </ol>
                <p>Một lần nữa, <strong>GYD</strong> xin cảm ơn v&igrave; đ&atilde; l&agrave; nơi m&agrave; bạn tin tưởng để gửi gắm qu&atilde;ng thời gian qu&yacute; b&aacute;u của m&igrave;nh trong những năm học sắp tới.</p>
                <p>Mong được gặp bạn ở ng&agrave;y phỏng vấn v&agrave; ch&uacute;c cho bạn thật nhiều sức khỏe.</p>
                <p>Y&ecirc;u bạn rất nhiều!</p>
                <p><strong>CLB Guitar Y Dược</strong></p>
                `
              });
              transporter.close();
			//your code to be executed after 1 second
			console.log(`* [promise-example-2] ${target.name}:`, res.messageId);
         	console.log("count:...", ++ count);
			// uncomment to see full response from Nodemailer:
			// console.log('* [promise-example-2] res.full:', res.full);
		  }, 15000); // Using default parameters
          
        } catch (e) {
          console.error('* [promise-example-2] ERROR:', e);
        }
      };
     await asyncAwaitSend();
  }
  const sendFailEmail = async (target) => {
    const asyncAwaitSend = async() => {
    try {
        await timeout(15000);
        setTimeout(async () => {
          let transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true, 
              pool: true,// true for 465, false for other ports
              auth: {
                user: "tcskmc.guitaryduoc@gmail.com", // generated ethereal user
                pass: "tcskmc.guitaryduoc123",  // generated ethereal password
              },
            });
          let res = await transporter.sendMail({
              from: "CLB GUITAR Y DƯỢC",
              to:   target.email,
              pool: true,
              subject: `CASTING BAN ${target.group} - CLB GUITAR Y DƯỢC`,
              html: `
              <p>Th&acirc;n gửi <strong>${target.name}</strong>,</p>
              <p><span style="font-weight: 400;">Trước hết, </span><strong>CLB Guitar Y Dược TP.HCM</strong><span style="font-weight: 400;"> xin cảm ơn bạn đ&atilde; d&agrave;nh thời gian quan t&acirc;m v&agrave; đăng k&yacute; tuyển th&agrave;nh vi&ecirc;n mới cho c&acirc;u lạc bộ. Ch&uacute;ng m&igrave;nh thực sự cảm k&iacute;ch v&agrave; đ&aacute;nh gi&aacute; cao với những lời chia sẻ ch&acirc;n th&agrave;nh c&ugrave;ng sự nỗ lực m&agrave; bạn đ&atilde; gửi đến cho ch&uacute;ng m&igrave;nh.&nbsp;</span></p>
              <p><span style="font-weight: 400;">Sau thời gian c&acirc;n nhắc kỹ lưỡng, ch&uacute;ng m&igrave;nh nhận thấy bạn chưa ph&ugrave; hợp để chọn v&agrave;o v&ograve;ng phỏng vấn.</span></p>
              <p><span style="font-weight: 400;">Ch&uacute;ng m&igrave;nh rất tiếc khi phải th&ocirc;ng b&aacute;o đến bạn rằng:</span></p>
              <p><span style="color: #ff0000;"><span style="font-weight: 400;">BẠN </span><strong>CHƯA</strong><span style="font-weight: 400;"> VƯỢT QUA </span><strong>V&Ograve;NG 1</strong><span style="font-weight: 400;">, BAN</span><strong> ${target.group} </strong><span style="font-weight: 400;">CỦA ĐỢT TUYỂN TH&Agrave;NH VI&Ecirc;N GYD N&Agrave;Y!</span></span></p>
              <p><span style="font-weight: 400;">Ch&uacute;c bạn may mắn v&agrave; hy vọng sẽ c&oacute; cơ hội hợp t&aacute;c với bạn trong tương lai.</span></p>
              <p><span style="font-weight: 400;">Tr&acirc;n trọng,</span></p>
              <p><strong>Guitar Y Dược.</strong></p>
              `
            });
            transporter.close();
          //your code to be executed after 1 second
          console.log(`* [promise-example-2] ${target.name}:`, res.messageId);
          console.log("count:...", ++ count);
          // uncomment to see full response from Nodemailer:
          // console.log('* [promise-example-2] res.full:', res.full);
        }, 15000); // Using default parameters
        
      } catch (e) {
        console.error('* [promise-example-2] ERROR:', e);
      }}
     await asyncAwaitSend();
  }

  const sendPassEmailDN = async (target) => {
    const asyncAwaitSend = async() => {
      try {
      await timeout(15000);
      setTimeout(async () => {
          
          let transporter = nodemailer.createTransport({
            name: 'smtp.gmail.com',
              host: 'smtp.gmail.com',
              port: 465,
              secure: true, 

              pool: true,// true for 465, false for other ports
              auth: {
                user: "tcskmc.gyd@gmail.com", // generated ethereal user
                pass: "tcskmc.gyd123", // generated ethereal password
              },
            });
          
          let res = await transporter.sendMail({
              from: "CLB GUITAR Y DƯỢC",
              to:   target.email,
              pool: true,
              subject: `CASTING BAN ${target.group} - CLB GUITAR Y DƯỢC`,
              html: `
              <p>
  <span style="font-weight: 400;">Thân gửi ${target.name},</span>
</p>
<p>
  <span style="font-weight: 400;">Lời đầu tiên, </span>
  <strong>CLB Guitar Y Dược</strong>
  <span style="font-weight: 400;"> xin chân thành cảm ơn bạn vì đã dành thời gian quan tâm và nộp đơn cho đợt tuyển thành viên lần này của </span>
  <strong>CLB</strong><span style="font-weight: 400;">. Chúng mình rất vui khi nhận được rất nhiều câu trả lời hết sức ấn tượng, sáng tạo qua lời chia sẻ của bạn.</span>
</p>
<p>
  <span style="font-weight: 400;">Sau thời gian cân nhắc xem xét kỹ lưỡng giữa các trưởng ban và phó ban, chúng mình rất vui khi được thông báo:</span>
</p>
<p>
  <span style="font-weight: 400;">CHÚC MỪNG BẠN ĐÃ </span>
  <strong>VƯỢT QUA VÒNG 1</strong>
  <span style="font-weight: 400;">, BAN</span>
  <strong> ${target.group} </strong>
  <span style="font-weight: 400;">CỦA ĐỢT </span>
  <strong>TUYỂN THÀNH VIÊN GYD</strong>
  <span style="font-weight: 400;"> LẦN NÀY! </span>
</p>
<p>
  <span style="font-weight: 400;">Để tiến gần hơn với ngôi nhà chung </span>
  <strong>"NGƯỜI TRONG GIA ĐÌNH"</strong>
  <span style="font-weight: 400;">, các bạn sẽ có một buổi </span>
  <mark>PHỎNG VẤN ONLINE</mark>
  <span style="font-weight: 400;"> qua </span>
  <mark>MICROSOFT TEAMS</mark>
  <span style="font-weight: 400;"> và để buổi phỏng vấn được diễn ra suôn sẻ, mong bạn hãy dành một chút thời gian đọc qua một số thông tin </span>
  <strong>lưu ý </strong>
  <span style="font-weight: 400;">cho buổi phỏng vấn nhé:</span>
</p>
<ol>
  <li style="font-weight: 400;">
    <span style="font-weight: 400;">Ngày phỏng vấn: </span>
    <mark>${target.date}</mark>
  </li>
  <li style="font-weight: 400;">
    <span style="font-weight: 400;">Thời gian bắt đầu phỏng vấn: </span>
    <mark>${target.time}</mark>
  </li>
  <li style="font-weight: 400;">
    <span style="font-weight: 400;">Vào phòng phỏng vấn trên TEAMS bằng mã Code:</span>
    <mark>1ifae8a</mark>
    <span style="font-weight: 400;">(link hướng dẫn: </span>
    <a href="https://drive.google.com/file/d/1a-b2yyWK6asIF5bd9PhHCtdPeR7DA84K/view?usp=sharing">
      <span style="font-weight: 400;">JOIN TEAMS</span>
    </a>
    <span style="font-weight: 400;">) </span>
  </li>
  <li style="font-weight: 400;">
    <strong>LƯU Ý:</strong>
    <ul style="list-style-type: '- ';">
      <li style="font-weight: 400;">
        <strong>
          <em>Khi phỏng vấn:</em>
        </strong>
        <span style="font-weight: 400;"></span>
        <a href="https://docs.google.com/document/d/1ILNhu06tB2VLqhbvZo2LBWC19ySuSUFuykyqroBAaBE/edit?usp=sharing">
          <span style="font-weight: 400;">LƯU Ý </span>
        </a>
      </li>
      <li style="font-weight: 400;">
        <strong>
          <em>Ban Đối Ngoại:</em>
        </strong>
        <mark style="font-weight: 400;">đọc kĩ proposal và bản kế hoạch Guitar Show “Sạp" </mark>
        <span style="font-weight: 400;">(</span>
        <a href="https://drive.google.com/drive/u/2/folders/1DWZ77IcSOn7pFP1Vg-TOEYZkIkka9vje">
          <span style="font-weight: 400;">https://drive.google.com/drive/u/2/folders/1DWZ77IcSOn7pFP1Vg-TOEYZkIkka9vje</span>
        </a>
        <span style="font-weight: 400;">)</span>
      </li>
    </ul>
  </li>
  <li style="font-weight: 400;">
    <span style="font-weight: 400;">Nếu có bất kỳ thắc mắc về ngày phỏng vấn, bạn hãy liên hệ với thư ký ban theo địa chỉ:</span>
    <ul style="list-style-type: '- ';">
      <li style="font-weight: 400;">
        <strong>
          <em> Facebook:  ${target.emailTK}</em>
        </strong>
        <span style="font-weight: 400;"></span>
      </li>
      <li>
        <strong>
          <em>
            <strong>
              <em>SĐT: ${target.phoneTK}</em>
            </strong>
          </em>
        </strong>
      </li>
    </ul>
  </li>
  <li style="font-weight: 400;">
    <span style="font-weight: 400;">Hạn phản hồi với các thư ký: </span>
    <strong>19h ngày 19/11/2021.</strong>
  </li>
</ol>
<p>
  <span style="font-weight: 400;">Một lần nữa, </span>
  <strong>GYD</strong>
  <span style="font-weight: 400;"> xin cảm ơn vì đã là nơi mà bạn tin tưởng để gửi gắm quãng thời gian quý báu của mình trong những năm học sắp tới. </span>
</p>
<p>
  <span style="font-weight: 400;">Mong được gặp bạn ở ngày phỏng vấn và chúc cho bạn thật nhiều sức khỏe.</span>
</p>
<p>
  <span style="font-weight: 400;">Yêu bạn rất nhiều!</span>
</p>
<p>
  <strong>CLB Guitar Y Dược</strong>
</p>
              `
            });
            transporter.close();
          //your code to be executed after 1 second
          console.log(`* [promise-example-2] ${target.name}:`, res.messageId);
           console.log("count:...", ++ count);
          // uncomment to see full response from Nodemailer:
          // console.log('* [promise-example-2] res.full:', res.full);
        }, 15000); // Using default parameters
        
      } catch (e) {
        console.error('* [promise-example-2] ERROR:', e);
      }
    };
   await asyncAwaitSend();
}

  let countName = 0;
  let index = 1
    // finalData["ĐẠT"].forEach(async ( e,i) => {
    //     setTimeout(async ()=>{
	// 		await timeout(8000);
	// 		console.log(e["HỌ VÀ TÊN "] + " PASS- count: " + ++countName); 

    //         await sendPassEmail({
    //             email:e["EMAIL "],
    //             name: e["HỌ VÀ TÊN "],
    //             time: e["THỜI GIAN BẮT ĐẦU PV"],
    //             date: e["NGÀY PHỎNG VẤN"],
    //             phoneTK:e["SĐT TK"],
    //             emailTK:e["LINK FB TK"],
	// 			group: e["BAN"]
    //         })

    //     },8000*i)
        
    // });

    // finalData["CHƯA ĐẠT"].forEach(async (e,i) => {
    //     setTimeout(async ()=>{
	// 		await timeout(8000);
	// 		console.log(e["HỌ VÀ TÊN "] + " FAIL - count: " + ++countName);
    //         await sendFailEmail({
    //             email:e["EMAIL "],
	// 			group: e["BAN"],
	// 			name: e["HỌ VÀ TÊN "]
    //         }) 
    //     },8000*i)
        
    // });
    
    let jsonDataDN = `
    {
        "Sheet1": [
            {
                "NGÀY PHỎNG VẤN": "20/11/2021",
                "THỜI GIAN BẮT ĐẦU PV": "13 giờ 30 phút",
                "HỌ VÀ TÊN ": "a",
                "BAN": "a ",
                "EMAIL ": "a@gmail.com",
                "SĐT TK": "a",
                "LINK FB TK": "https://www.facebook.com/a"
            }
        ]
    }
    `
    let dnData =  JSON.parse(jsonDataDN)
    dnData["Sheet1"].forEach(async (e,i) => {
        setTimeout(async ()=>{
			await timeout(8000);
			console.log(e["HỌ VÀ TÊN "] + " PASS DN - count: " + ++countName);
            await sendPassEmailDN({
                email:e["EMAIL "],
                name: e["HỌ VÀ TÊN "],
                time: e["THỜI GIAN BẮT ĐẦU PV"],
                date: e["NGÀY PHỎNG VẤN"],
                phoneTK:e["SĐT TK"],
                emailTK:e["LINK FB TK"],
				group: e["BAN"]
            }) 
        },8000*i)
        
    });

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
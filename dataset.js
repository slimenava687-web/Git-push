const RESEARCH_DATA = [
  {
    "info": {
      "id": "group-1",
      "title": "Nhóm 1 — Nhận diện vật cản",
      "subtitle": "Các nghiên cứu tập trung cốt lõi vào mô hình thị giác máy tính và phát hiện chướng ngại vật trong/ngoài nhà",
      "icon": "👁️",
      "badge_class": "badge-group-1",
      "file_name": "bang_1_nhan_dien_vat_can"
    },
    "items": [
      {
        "stt": "1",
        "title": "Obstacle Detection System for Navigation Assistance of Visually Impaired People Based on Deep Learning Techniques",
        "year": "2023",
        "source": "Sensors, MDPI. DOI: 10.3390/s23115262 MDPI",
        "what": "Đề xuất hệ thống nhận diện vật cản trong nhà và ngoài trời bằng mô hình phát hiện vật thể FCOS, kết hợp tìm kiếm kiến trúc mạng thần kinh (NAS). Mô hình được huấn luyện và đánh giá trên dữ liệu COCO kết hợp bộ dữ liệu vật thể trong nhà IODR.",
        "value": "Cải thiện mô hình phát hiện vật cản, đồng thời hướng đến giảm độ phức tạp tính toán và hỗ trợ triển khai trên thiết bị nhúng.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": false
        },
        "score": 1,
        "note": "Chủ yếu nghiên cứu mô hình phát hiện, chưa đủ căn cứ để đánh dấu các chức năng còn lại."
      },
      {
        "stt": "2",
        "title": "Outdoor Mobility Aid for People with Visual Impairment: Obstacle Detection and Responsive Framework for the Scene Perception during the Outdoor Mobility of People with Visual Impairment",
        "year": "2023",
        "source": "Expert Systems with Applications, ScienceDirect. DOI: 10.1016/j.eswa.2023.120464 ScienceDirect",
        "what": "Xây dựng bộ dữ liệu riêng về những vật thể nguy hiểm đối với người khiếm thị khi di chuyển ngoài trời và phát triển mô hình phát hiện vật thể. Nghiên cứu đề xuất một khung xử lý nhằm hỗ trợ nhận thức khung cảnh ngoài trời theo thời gian thực.",
        "value": "Đưa các vật cản đặc thù như chướng ngại vật trên lối đi vào bài toán, thay vì chỉ sử dụng các lớp vật thể phổ thông.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": false
        },
        "score": 1,
        "note": "Trọng tâm là nhận diện và diễn giải khung cảnh."
      },
      {
        "stt": "3",
        "title": "YOLO-OD: Obstacle Detection for Visually Impaired Navigation Assistance",
        "year": "2024",
        "source": "Sensors, MDPI. DOI: 10.3390/s24237621 PMC",
        "what": "Đề xuất YOLO-OD với các thành phần cải tiến nhằm phân biệt vật thể có kích thước khác nhau, xử lý hiện tượng che khuất và phát hiện vật cản nhỏ trong môi trường ngoài trời. Bài báo đánh giá phương pháp trên bộ dữ liệu công khai.",
        "value": "Tập trung cải thiện chất lượng nhận diện vật cản ở những tình huống khó, có ích khi phát triển mô-đun thị giác cho thiết bị hỗ trợ người khiếm thị.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": false
        },
        "score": 1,
        "note": "Tập trung vào thuật toán phát hiện vật thể, không phải hệ thống cảnh báo hoàn chỉnh."
      },
      {
        "stt": "4",
        "title": "Enhancing Object Detection in Assistive Technology for the Visually Impaired: A DETR-Based Approach",
        "year": "2025",
        "source": "IEEE Access. DOI: 10.1109/ACCESS.2025.3558370 IEEE Xplore",
        "what": "Phát triển hệ thống phát hiện vật cản theo thời gian thực dùng camera gắn với ứng dụng di động, đồng thời so sánh YOLOv8, Faster R-CNN và DETR. Hệ thống nhận diện các lớp như người đi bộ, phương tiện và tín hiệu giao thông, sau đó cung cấp phản hồi bằng âm thanh.",
        "value": "Đánh giá sự cân bằng giữa độ chính xác và tốc độ xử lý của các mô hình, đồng thời kết hợp nhận diện với phản hồi âm thanh và định hướng triển khai trên thiết bị biên.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": true
        },
        "score": 2,
        "note": "Có nhận diện và cảnh báo âm thanh, nhưng nguồn đã kiểm tra không xác nhận ước lượng khoảng cách hoặc dự đoán va chạm."
      },
      {
        "stt": "5",
        "title": "Enhanced Obstacle Detection Using Bilateral Vision-Aided Transformer Neural Network for Visually Impaired Persons",
        "year": "2025",
        "source": "Cluster Computing, Springer. DOI: 10.1007/s10586-025-05740-z Springer Nature Link",
        "what": "Đề xuất mô hình BViT-CKNN kết hợp xử lý ảnh hai mắt, Vision Transformer để trích xuất đặc trưng toàn cục và mạng CKNN để khai thác đặc trưng cục bộ. Phương pháp được đánh giá trên bộ dữ liệu COCO với các chỉ số precision, recall và F1-score.",
        "value": "Cải thiện hiệu quả nhận diện nhờ kết hợp đặc trưng toàn cục và chi tiết; phù hợp làm cơ sở nghiên cứu thuật toán nhận diện vật cản.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": false
        },
        "score": 1,
        "note": "Nguồn đã kiểm tra chủ yếu xác nhận kết quả mô hình trên dữ liệu, không xác nhận thử nghiệm cảnh báo với người khiếm thị."
      }
    ]
  },
  {
    "info": {
      "id": "group-2",
      "title": "Nhóm 2 — Ước lượng khoảng cách và vị trí",
      "subtitle": "Kết hợp nhận diện với định lượng khoảng cách 3D, lập bản đồ độ sâu và định vị tương đối",
      "icon": "📏",
      "badge_class": "badge-group-2",
      "file_name": "bang_2_uoc_luong_khoang_cach_vi_tri"
    },
    "items": [
      {
        "stt": "6",
        "title": "Obstacle Detection and Distance Estimation for Visually Impaired People",
        "year": "2023",
        "source": "IEEE Access. DOI: 10.1109/ACCESS.2023.3338154 MMU Institutional Repository",
        "what": "Đề xuất thiết bị đeo dạng kính thông minh tích hợp Raspberry Pi, camera và mạng CNN đã huấn luyện trước để nhận diện vật thể và ước lượng khoảng cách tới người dùng. Hệ thống cung cấp phản hồi âm thanh hoặc xúc giác để thông báo vật cản.",
        "value": "Kết hợp nhận diện, khoảng cách và phản hồi ngay trên thiết bị đeo, hướng tới hỗ trợ di chuyển thuận tiện hơn.",
        "features": {
          "detect": true,
          "dist": true,
          "col": false,
          "alert": true
        },
        "score": 3,
        "note": "Không đánh dấu đánh giá nguy hiểm vì nguồn đã kiểm tra chưa xác nhận mô-đun này."
      },
      {
        "stt": "7",
        "title": "DeepNAVI: A Deep Learning Based Smartphone Navigation Assistant for People with Visual Impairments",
        "year": "2023",
        "source": "Expert Systems with Applications, ScienceDirect. DOI: 10.1016/j.eswa.2022.118720 ScienceDirect",
        "what": "Xây dựng trợ lý điều hướng trên điện thoại thông minh cung cấp loại vật cản, vị trí, khoảng cách, trạng thái chuyển động và thông tin khung cảnh. Các thông tin được truyền đạt bằng âm thanh; nghiên cứu có thử nghiệm thí điểm với một người dùng.",
        "value": "Hướng đến thiết bị gọn nhẹ, có khả năng chạy theo thời gian thực và cung cấp nhiều thông tin điều hướng bằng một giao diện âm thanh.",
        "features": {
          "detect": true,
          "dist": true,
          "col": false,
          "alert": true
        },
        "score": 3,
        "note": "Có thử nghiệm người dùng ban đầu; chưa nên xem trạng thái chuyển động là dự đoán va chạm."
      },
      {
        "stt": "8",
        "title": "Smart Vision: Enhancing Blind Mobility with Real-Time Object Detection, Proximity and Position Estimation",
        "year": "2025",
        "source": "Hội nghị ICPCSN, IEEE Xplore. DOI: 10.1109/ICPCSN65854.2025.11034853 IEEE Xplore",
        "what": "Dùng YOLOv8s để nhận diện vật thể, ước lượng khoảng cách dựa trên kích thước bounding box và xác định vị trí theo lưới 3 × 3. Hệ thống phát cảnh báo giọng nói khi vật thể tiến lại gần, không cần cảm biến đo chiều sâu chuyên dụng.",
        "value": "Tích hợp nhận diện, khoảng cách, vị trí tương đối và hướng dẫn bằng giọng nói trong một giải pháp hướng tới chi phí phần cứng thấp.",
        "features": {
          "detect": true,
          "dist": true,
          "col": false,
          "alert": true
        },
        "score": 3,
        "note": "Không có bằng chứng rõ về mô-đun đánh giá rủi ro hoặc dự đoán TTC."
      },
      {
        "stt": "9",
        "title": "A Real-Time Indoor Object Detection and Distance Estimation System for Visually Impaired Individuals",
        "year": "2025",
        "source": "Procedia Computer Science, ScienceDirect. DOI: 10.1016/j.procs.2025.07.154 ScienceDirect",
        "what": "Sử dụng camera kết hợp ESP32 để thu nhận hình ảnh, gửi dữ liệu đến máy chủ xử lý bằng YOLOv8, rồi truyền thông tin vật cản và khoảng cách đến người dùng qua tai nghe. Bài báo báo cáo độ chính xác nhận diện 85% và hệ số xác định của ước lượng khoảng cách là 0,97578.",
        "value": "Cung cấp mô hình tham khảo cho hệ thống hỗ trợ trong nhà có đường xử lý hình ảnh và phản hồi âm thanh.",
        "features": {
          "detect": true,
          "dist": true,
          "col": false,
          "alert": true
        },
        "score": 3,
        "note": "Chủ yếu phục vụ môi trường trong nhà; xử lý hình ảnh có sử dụng máy chủ."
      },
      {
        "stt": "10",
        "title": "Low-Cost Smart Cane for Visually Impaired People with Pathway Surface Detection and Distance Estimation Using Weighted Bounding Boxes and Depth Mapping",
        "year": "2025",
        "source": "Information, MDPI. DOI: 10.3390/info16080707 MDPI",
        "what": "Phát triển gậy thông minh sử dụng hai camera RGB, cảm biến siêu âm và mô hình YOLO để nhận diện vật cản, ước lượng khoảng cách và phát hiện điểm chuyển tiếp giữa các loại bề mặt. Hệ thống phân loại vật cản theo ba mức nhẹ, trung bình và nghiêm trọng, sau đó đưa ra cảnh báo âm thanh theo loại vật thể, khoảng cách và mức độ nguy hiểm.",
        "value": "Bao phủ nhiều công đoạn của hệ thống hỗ trợ, đồng thời mở rộng nhận diện từ vật cản sang thay đổi bề mặt lối đi.",
        "features": {
          "detect": true,
          "dist": true,
          "col": true,
          "alert": true
        },
        "score": 4,
        "note": "Đủ 4 chức năng theo tiêu chí đánh giá nguy hiểm; nguồn không chứng minh hệ thống tính TTC tường minh."
      }
    ]
  },
  {
    "info": {
      "id": "group-3",
      "title": "Nhóm 3 — Dự đoán va chạm và đánh giá nguy hiểm",
      "subtitle": "Ước lượng thời gian đến va chạm (TTC), phân tích quỹ đạo cắt ngang và xếp thứ tự ưu tiên rủi ro",
      "icon": "⚠️",
      "badge_class": "badge-group-3",
      "file_name": "bang_3_du_doan_va_cham_nguy_hiem"
    },
    "items": [
      {
        "stt": "11",
        "title": "Time- and Resource-Efficient Time-to-Collision Forecasting for Indoor Pedestrian Obstacles Avoidance",
        "year": "2021",
        "source": "Journal of Imaging, MDPI. DOI: 10.3390/jimaging7040061 PMC",
        "what": "Nghiên cứu phương pháp dự đoán thời gian đến va chạm từ góc nhìn camera đơn trên kính thông minh. Hệ thống sử dụng thông tin không gian, bản đồ độ sâu và vị trí vật cản để ước lượng khi nào vật cản có thể chạm tới người dùng hoặc tiến vào khoảng cách dưới một mét.",
        "value": "Đưa TTC thành một chỉ số đánh giá rủi ro, giúp chuyển từ phát hiện vật cản đơn thuần sang ước lượng mức độ cấp bách của tình huống.",
        "features": {
          "detect": true,
          "dist": true,
          "col": true,
          "alert": false
        },
        "score": 3,
        "note": "Tập trung vào phương pháp dự đoán TTC, không phải một hệ thống cảnh báo người dùng hoàn chỉnh."
      },
      {
        "stt": "12",
        "title": "Vision Transformer Customized for Environment Detection and Collision Prediction to Assist the Visually Impaired",
        "year": "2023",
        "source": "Journal of Imaging, MDPI. DOI: 10.3390/jimaging9080161 PMC",
        "what": "Kết hợp Vision Transformer, phân đoạn ngữ nghĩa và vector quỹ đạo để nhận diện vật thể có khả năng cắt ngang đường đi của người dùng. Hệ thống thiết kế cảnh báo va chạm qua âm thanh và rung; bộ dữ liệu gồm 27.867 ảnh thuộc 24 lớp vật thể.",
        "value": "Kết nối nhận diện, suy luận khả năng giao cắt với lộ trình và cảnh báo đa phương thức trong cùng một thiết kế.",
        "features": {
          "detect": true,
          "dist": true,
          "col": true,
          "alert": true
        },
        "score": 4,
        "note": "Đủ 4 chức năng nếu chức năng 2 bao gồm vị trí/quỹ đạo. Bài báo cho biết đánh giá khả năng sử dụng và hiệu quả thực tế còn là công việc tiếp theo."
      },
      {
        "stt": "13",
        "title": "ARAware: Assisting Visually Impaired People with Real-Time Critical Moving Object Identification",
        "year": "2024",
        "source": "Sensors, MDPI. DOI: 10.3390/s24134282 MDPI",
        "what": "Hệ thống nhận diện các vật thể chuyển động nguy hiểm như ô tô, xe máy, xe đạp và người đi bộ, sau đó đánh giá, phân loại mức độ rủi ro và ưu tiên thứ tự phát cảnh báo. Nghiên cứu có đánh giá nguyên mẫu trong điều kiện thực tế và báo cáo tốc độ xử lý 32 FPS với luồng video đầu vào 30 FPS.",
        "value": "Tập trung vào việc xác định vật thể nào đáng lo ngại hơn và gửi thông báo theo mức độ ưu tiên, thay vì cảnh báo mọi vật thể như nhau.",
        "features": {
          "detect": true,
          "dist": false,
          "col": true,
          "alert": true
        },
        "score": 3,
        "note": "Không đánh dấu chức năng 2 vì nguồn đã kiểm tra không xác nhận mô-đun ước lượng khoảng cách. Có dùng thời gian va chạm dự kiến để ưu tiên cảnh báo."
      },
      {
        "stt": "14",
        "title": "An Indoor Context-Aware Obstacle Detection Application for Visually Impaired Users",
        "year": "2025",
        "source": "Hội nghị ICSEC, IEEE Xplore. DOI: 10.1109/ICSEC67360.2025.11298017 EurekaMag",
        "what": "Kết hợp YOLOv8n để nhận diện vật cản trong nhà với ước lượng độ sâu đơn ảnh để phân biệt vật thể gần và xa. Cơ chế ưu tiên kết hợp độ sâu, mức nguy hiểm, khả năng tránh, hướng và chuyển động nhằm lọc các phát hiện ít quan trọng trước khi phát cảnh báo âm thanh.",
        "value": "Hướng tới giảm cảnh báo không cần thiết và tải nhận thức cho người dùng, đồng thời xét ngữ cảnh thay vì chỉ dựa trên nhãn vật thể.",
        "features": {
          "detect": true,
          "dist": true,
          "col": true,
          "alert": true
        },
        "score": 4,
        "note": "Đủ 4 chức năng theo tiêu chí đánh giá nguy hiểm; nguồn đã kiểm tra không xác nhận TTC tường minh."
      }
    ]
  },
  {
    "info": {
      "id": "group-4",
      "title": "Nhóm 4 — Cảnh báo người dùng bằng âm thanh hoặc rung",
      "subtitle": "Tích hợp thiết bị phần cứng hoàn chỉnh (wearable), phản hồi xúc giác/giọng nói thông minh",
      "icon": "🔔",
      "badge_class": "badge-group-4",
      "file_name": "bang_4_canh_bao_am_thanh_rung"
    },
    "items": [
      {
        "stt": "15",
        "title": "Intelligent Head-Mounted Obstacle Avoidance Wearable for the Blind and Visually Impaired",
        "year": "2023",
        "source": "Sensors, MDPI. DOI: 10.3390/s23239598 MDPI",
        "what": "Đề xuất thiết bị đeo trên đầu để nhận diện vật cản theo thời gian thực và cảnh báo người dùng. Nghiên cứu thử nghiệm hơn 30 cấu hình mô hình nhằm tìm sự cân bằng giữa độ chính xác và tốc độ xử lý, hướng đến thiết bị nhỏ gọn.",
        "value": "Giải quyết các yêu cầu thực tiễn của hệ thống đeo như hiệu suất tính toán, kích thước và khả năng hoạt động khi người dùng xoay đầu.",
        "features": {
          "detect": true,
          "dist": false,
          "col": false,
          "alert": true
        },
        "score": 2,
        "note": "Nguồn đã kiểm tra xác nhận chức năng nhận diện và cảnh báo, nhưng chưa đủ căn cứ đánh dấu ước lượng khoảng cách hoặc đánh giá rủi ro."
      },
      {
        "stt": "16",
        "title": "A Wearable Obstacle Avoidance Device for Visually Impaired Individuals with Cross-Modal Learning",
        "year": "2025",
        "source": "Nature Communications. DOI: 10.1038/s41467-025-58085-x Nature Communications",
        "what": "Thiết bị gồm kính tự phát triển và điện thoại thông minh, sử dụng dữ liệu video kết hợp độ sâu để nhận diện vật cản. Người dùng nhận thông tin qua âm thanh và rung; thí nghiệm trong nhà và ngoài trời báo cáo tỷ lệ tránh va chạm 100%, độ trễ dưới 320 ms và thời lượng hoạt động khoảng 11 giờ.",
        "value": "Có đánh giá thực nghiệm về khả năng tránh va chạm, độ trễ và thời lượng sử dụng, không chỉ báo cáo độ chính xác của mô hình nhận diện.",
        "features": {
          "detect": true,
          "dist": true,
          "col": false,
          "alert": true
        },
        "score": 3,
        "note": "Đo được hiệu quả tránh va chạm trong thí nghiệm, nhưng chưa đủ căn cứ xác nhận có mô-đun dự đoán TTC hoặc phân loại mức độ nguy hiểm."
      },
      {
        "stt": "17",
        "title": "AI-Assisted Vision Alarming System for Blind and Vision-Impaired People",
        "year": "2026",
        "source": "Sensors, MDPI. DOI: 10.3390/s26102929 MDPI",
        "what": "Xây dựng hệ thống VAS trên Raspberry Pi 5, kết hợp camera độ sâu, LiDAR, YOLOv4-tiny và ROS 2 để nhận diện vật thể, tính khoảng cách và góc tương đối. Hệ thống tạo cảnh báo giọng nói bằng TTS, ưu tiên vật cản cấp thiết và gộp thông báo cho những vật thể gần nhau nhằm tránh phát quá nhiều cảnh báo.",
        "value": "Kết hợp nhận diện, thông tin vị trí/khoảng cách và chiến lược cảnh báo ngắn gọn; hướng đến hệ thống độc lập, chi phí thấp và sử dụng được trong nhiều điều kiện môi trường.",
        "features": {
          "detect": true,
          "dist": true,
          "col": true,
          "alert": true
        },
        "score": 4,
        "note": "Đủ 4 chức năng theo tiêu chí đánh giá mức độ cấp thiết; không đồng nghĩa với có thuật toán TTC. Bài báo có thành viên khiếm thị tham gia nhóm nghiên cứu, nhưng không báo cáo thử nghiệm với nhóm người dùng độc lập."
      }
    ]
  }
];

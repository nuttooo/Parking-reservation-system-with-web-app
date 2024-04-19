import cv2
from easyocr import Reader
from darknet import load_net_custom, load_meta

# Load YOLOv4 model
net = load_net_custom("yolov4-custom.cfg", "yolov4-custom.weights", 0, 1)
meta = load_meta("obj.data")

# Load EasyOCR reader
reader = Reader(['en'])

# Load image
image = cv2.imread("test1.jpeg")

# Detect objects using YOLOv4
def detect_objects(image):
    # YOLOv4 detection code goes here
    # ตรวจจับวัตถุโดยใช้ YOLOv4 บนภาพ
    # คืนผลลัพธ์เป็นรายการของ (label, confidence, bbox)
    pass

# แก้ไขฟังก์ชัน detect_objects() เพื่อใช้งาน
results = detect_objects(image)

# Iterate through detected objects
for result in results:
    label, confidence, bbox = result
    if label == 'license_plate':
        x, y, w, h = bbox
        license_plate_img = image[y:y+h, x:x+w]
        # Read license plate using EasyOCR
        license_plate_text = reader.readtext(license_plate_img)

        # Print the result
        print("License Plate:", license_plate_text)

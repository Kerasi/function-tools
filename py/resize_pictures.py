from PIL import Image
from tkinter import filedialog
from tkinter import Tk

def resize_image(input_image_path, output_image_path, size):
    original_image = Image.open(input_image_path)
    resized_image = original_image.resize(size)
    resized_image.save(output_image_path)

root = Tk()
root.withdraw()  # Hide the main window.
file_paths = filedialog.askopenfilenames(title="选择图像文件",
                                         filetypes=(("jpeg files", "*.jpg"),
                                                    ("png files", "*.png"),
                                                    ("all files", "*.*")))

for file_path in file_paths:
    output_filename = file_path.rsplit('.', 1)[0] + "_resized." + file_path.rsplit('.', 1)[1]
    resize_image(file_path, output_filename, (512, 442))

root.mainloop()

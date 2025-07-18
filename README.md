# LectureTracker

LectureTracker is a web application designed to help Computer Science & Engineering students. It provides a structured way to track progress through video lecture series, breaking them down into manageable daily study plans based on user-defined settings.

The application is live at: [https://cseLectureTracker.vercel.app/](https://cseLectureTracker.vercel.app/)

![Project Screenshot]()

## ✨ Features

- **Dynamic Study Plan:** Automatically groups lecture videos into daily schedules based on your desired daily study duration and video playback speed.
- **Progress Tracking:** Mark videos as completed and visually track your progress for each day with an animated progress bar.
- **Persistent State:** Your progress and settings (study time, speed, etc.) are saved locally in your browser, so you can pick up where you left off.
- **Customizable Experience:** Adjust daily study hours, playback speed, and the number of days displayed per page.
- **Interactive UI:** Built with modern, animated components using Framer Motion and shadcn/ui for a smooth user experience.
- **Open Source:** The project is open-source and welcomes contributions!

## 🚀 Built With

This project is built with a modern tech stack:

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (using Radix UI primitives)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/krishnak2c/LectureTracker.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd LectureTracker
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1.  Start the development server:
    ```sh
    npm run dev
    ```
2.  Open http://localhost:3000 in your browser to see the result.

## ⚙️ How It Works

The application uses JSON data for each subject, containing video lectures and durations. It calculates daily schedules by grouping videos based on your preferred study duration and playback speed. Track your progress with checkboxes; your settings are saved in your browser's `localStorage`.

### Data Structure

The video data for each subject is stored in a separate JSON file inside the `/data` directory (e.g., `/data/cn.json`). To add new subjects or update video lists, you can modify these files. Each JSON file is an array of video objects with the following structure:

```json
[
  {
    "index": "1",
    "videoLink": "https://www.youtube.com/watch?v=...",
    "videoTitle": "Introduction to Computer Networks",
    "videoTime": "45:32",
    "videoDurationInSeconds": 2732,
    "thumbnailUrl": "https://i.ytimg.com/vi/.../hqdefault.jpg"
  }
]
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License.

```
MIT License

Copyright (c) 2023 Krishna Choudhary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
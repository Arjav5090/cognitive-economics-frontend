import { Link } from "react-router-dom";

const ManufacturingPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Cognitive Economics in Human-AI Decision-Making
      </h1>

      <div className="space-y-4 mb-8">
        <p className="text-sm sm:text-base lg:text-lg">
          Human-AI interactions are reshaping decision-making in all realms.
          Learn how cognitive economics can improve the quality of medical
          decision-making by better aligning AIs with human interests and better
          training humans to work with AIs.
        </p>

        <p className="text-sm sm:text-base lg:text-lg">
          Cognitive economics provides three key contributions to understanding
          and optimizing human-AI interactions in decision-making:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
          <li>
            The economic model of learning offers a framework for analyzing the
            four stages of a human-AI decision-making pipeline: manufacturing
            ground truth, training the AI, collaborative human-AI
            decision-making protocols, and training calibration. All stages are
            critical in medical decision-making.
          </li>
          <li>
            Cognitive economics aligns naturally with the datasets used to
            evaluate AI performance.
          </li>
          <li>
            It enables the testing of design principles through lab experiments,
            improving decision-making quality.
          </li>
        </ol>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          1. Manufacturing "Ground Truth"
        </h2>
        <p className="text-sm sm:text-base lg:text-lg">
          Ground truth data—such as identifying whether a lesion is
          cancerous—forms the backbone of AI applications in critical fields
          like medicine. However, objectively labeled data is often scarce,
          necessitating human involvement in labeling. Cognitive economics
          enhances this process by:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
          <li>
            Eliciting beliefs: Instead of relying on binary labels, we collect
            subjective probability judgments from annotators, leading to greater
            label accuracy and improved AI performance.
          </li>
          <li>
            Optimizing workflows: Future research focuses on selecting
            annotators, designing payment schemes, and optimizing crowd
            composition for better results.
          </li>
        </ul>

        <p className="text-sm sm:text-base lg:text-lg">
          Recent findings indicate significant improvements in label accuracy
          and model performance when cognitive economic principles are applied.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/futureandreferences"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/training"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default ManufacturingPage;

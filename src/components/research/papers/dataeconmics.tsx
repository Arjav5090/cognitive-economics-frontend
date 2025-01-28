import { Link } from "react-router-dom";

export default function DataEngineeringCognitiveEconomicsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 font-outfit border-[#000000] rounded text-sm hover:text-white hover:bg-black "
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            Data Engineering for Cognitive Economics: State Dependent Stochastic Choice and Choice Process Data
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-outfit font-medium">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-outfit font-bold">Published in</p>
            <p className="text-sm text-[#000000] font-outfit font-light">Palgrave Pivot, 2025</p>
          </div>

          <div className="space-y-4 text-sm">
            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">7.2 Data Engineering for Cognitive Economics: State Dependent Stochastic Choice and Choice Process Data</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Much of my ongoing research in Cognitive Economics is detailed in the introductory Palgrave Pivot (link).
                This section provides background on the research process and key ideas. My path has been intertwined with
                economic data engineering—the search for new forms of data to operationalize economic models—and has
                been roundabout, as life often is.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">The Operational Challenge</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                When John Leahy and I modeled preferences over psychological states (Caplin and Leahy 2001), we faced
                significant pushback. Gul and Pesendorfer (2008) argued that psychological states do not belong in economic
                modeling as being (supposedly) unobservable. For me, this raised deeper questions concerning how to better
                operationalize even the most standard economic model of choice under uncertainty: the subjective expected
                utility model. This model captures how preferences and beliefs interact in choice. Yet standard choice data
                provides too limited a window. Suppose you had recently rearranged food storage and your 3-year old
                pointed to a cabinet that now had sour pickles in. Would you offer infer that they liked pickles more than
                the sweets in the neighboring cabinet? Or would you find it more credible that they had forgotten that the
                sweets and pickles had recently been switched?
              </p>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                The general moral is that choice alone is of little use when there are information constraints. It is this
                that underlies the deep link between cognitive economics and data engineering, the creation of novel
                model-based data sets to resolve identification problems (link JEL article).
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Choice Process Protocol</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Building on the foundational insights of Block and Marschak (1959) in their call for new “basic observations”,
                my research in cognitive economics has focused on engineering data that disentangles key model constructs,
                starting with preferences and beliefs. A first such engineered data set is the choice process protocol,
                in which the decision maker has incentives to choose quickly but to continuously update as their beliefs
                change. In a first implementation (Caplin, Dean, and Martin, 2011), subjects chose the largest value from
                arithmetic operations presented as text (e.g., four plus eight minus three), with complexity and choice
                set size varied. We observed switches in their provisional choices until they chose to stop searching.
                The resulting data aligned well with search theoretic predictions and satisficing behavior. The choice process
                protocol is increasingly in use in other settings (e.g. Agranov, Caplin, and Tergiman, 2015).
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">State Dependent Stochastic Choice Data</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                In multiple choice tests we can safely assume that the goal of the student is to get the question right.
                If they get it wrong, we infer that they did not know the answer, not that they preferred to get the
                question wrong. Likewise when asking experimental subjects to judge which of two weights is heavier.
                Recent research indicates that analogous data is of greatest value in cognitive economics: it is known
                as state dependent stochastic choice (SDSC) data. Daniel Martin and I introduced it into economic
                analysis in Caplin and Martin 2015.
              </p>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                In economic applications, the state of the world is far more subtle than the correct answer to a yes-no
                question. It might be the precise terms of a complex contract. It might be the actual contingent cost of
                insurance as a function of all possible forms of medical problems. It might be the full text of a book.
                It might be the historical wages of those who receive a certain college degree. It might be whether or
                not an image of a blood cell indicates cancer. It might be the best way of organizing workers to maximize
                productivity. It might be the accuracy of an AI assistant you are using in the course of your work. It might
                be the truth or lack of it of a seemingly factual response from ChatGPT. It turns out that methods of generating
                SDSC are available in all cases and are critical to applications of cognitive economics.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Economic Surveys and More</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                There are many important forms of data engineering for cognitive economics beyond choice process data and
                SDSC that are critical. These include strategic survey questions (SSQs), and contingent belief measures
                which are covered elsewhere in this website (link Life Cycle Savings). We’re far from finished with
                innovations in measurement. Like other sciences, cognitive economics will advance by developing and
                deploying new forms of data that are closely tied to improvements in modeling and measurement technology.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">References</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2">
                <li>
                  Caplin, A., and J. Leahy, “Psychological Expected Utility Theory and Anticipatory Feelings”.
                  Quarterly Journal of Economics, 2001.
                  <p>Extends expected utility theory to account for emotional states like anxiety and anticipatory excitement.</p>
                </li>
                <li>
                  Gul, F., and W. Pesendorfer, “In Defense of Mindless Economics”. Foundations of Positive and Normative Economics,
                  eds. A. Caplin and A. Schotter, MIT Press 2008.
                  <p>Privileges standard choice data as the only relevant data for economic modeling.</p>
                </li>
                <li>
                  Block, H. D., & Marschak, J. (1959). “Random Orderings and Stochastic Theories of Response”.
                  Cowles Foundation Discussion Paper.
                  <p>Introduces stochastic choice and the random utility model into economic analysis, notes that standard choice data is inadequate to identify the source of randomness, and proposes that data engineering will be needed for cognitive economics to take off.</p>
                </li>
                <li>
                  Caplin, A., M. Dean, and D. Martin, “Search and Satisficing”. with Mark Dean and Daniel Martin.
                  American Economic Review, 101, 2899-2922, 2011.
                  <p>Implements the choice process protocol in a complex choice problem and validates the satisficing model.</p>
                </li>
                <li>
                  Agranov, M., A. Caplin, and C. Tergiman, “Naïve Play and the Process of Choice in Guessing Games”.
                  Journal of the Economic Science Association, 1:1-12, 2015.
                  <p>Introduces the choice process protocol in a strategic setting and uses it to identify naive players.</p>
                </li>
                <li>
                  Caplin, A., and D. Martin, “A Testable Theory of Imperfect Perception”. Economic Journal, 2015.
                  <p>Introduces SDSC and introduces the No Improving Action Switches condition as the testable implication of the subjective expected utility model.</p>
                </li>
                <li>
                  Caplin, A., and D. Martin, “The Dual-Process Drift Diffusion Model: Evidence from Response Times”.
                  with Daniel Martin. Economic Inquiry, 54 (2): 1274-1282, 2016.
                  <p>Combines dual-process and drift-diffusion models to link response time with choice quality.</p>
                </li>
                <li>
                  Caplin, A., and D. Martin, “Defaults and Attention: The Dropout Effect”.
                  with Daniel Martin. Revue économique, 5(5), 747-755, 2017.
                  <p>Explores the unintended consequences of default policies in limiting learning.</p>
                </li>
                <li>
                  Caplin, A., “Measuring and Modeling Attention”. Annual Review of Economics, 8(1), 379-403, 2016.
                  <p>Reviews attentional choice research and the need for novel data sets.</p>
                </li>
                <li>
                  Caplin, A., D. Csaba, J. Leahy, and O. Nov, “Rational Inattention, Competitive Supply, and Psychometrics”.
                  Quarterly Journal of Economics, 135(3), 1681-1724, 2020.
                  <p>Introduces and applies simple methods to recover attention costs from choice data based on a precise analogy with competitive supply.</p>
                </li>
                <li>
                  Caplin, A., A. Gomberg, and J. Sadka Judging the Judges: Indexing of Complex Information Reduces Injustice.
                  NBER Working Paper 32587. 2024.
                  <p>Demonstrates that cognitive constraints produce injustice in its most paradigmatic form: incorrect verdicts in judicial trials.</p>
                </li>
                <li>
                  Caplin, A., and D. Martin, “Modeling Machine Learning: A Cognitive Economic Approach”.
                  with Daniel J. Martin and Philip Marx. NBER Working Paper 30600, 2022.
                  <p>Examines the alignment of machine learning predictions with cognitive economic models.</p>
                </li>
                <li>
                  Caplin, A., D. Deming, S. Leth-Petersen and B. Weidmann. Economic Decision-Making Skill Predicts Income in Two Countries.
                  NBER Working Paper 31674. 2023.
                  <p>Models and measures economic decision-making skill and finds that it strongly predicts earnings in the U.S. and Denmark.</p>
                </li>
                <li>
                  Caplin, A., D. Deming, S. Li, D. Martin, P. Marx, B. Weidmann, and K. Ye “The ABC’s of Who Benefits from Working with AI:
                  Ability, Beliefs, and Calibration”. NBER Working Paper 33021, 2024.
                  <p>Demonstrates that ability and belief calibration jointly determine the benefits of working with AI.</p>
                </li>
                <li>
                  Caplin, A., “An Introduction to Cognitive Economics: The Science of Mistakes”.
                  Palgrave Macmillan Pivot, 2025.
                  <p>A general introduction to the field.</p>
                </li>
                <li>
                  Caplin, A., “Data Engineering for Cognitive Economics”. Journal of Economic Literature, 2025.
                  <p>A general statement of method.</p>
                </li>
                <li>
                  G. Epping, A. Caplin, A., E. Duhaime, W. Holmes, D. Martin, and J. Trueblood.
                  “Improving Human and Machine Classification through Cognitive-Inspired Data Engineering”. 2025.
                  <p>Uses cognitive economic methods to improve AI labeling and AI performance in crowd-sourced datasets, by recalibrating subjective probability judgments.</p>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

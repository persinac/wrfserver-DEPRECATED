import {QuestionOptions} from "../entity/QuestionOptions";
import {Connection} from "typeorm";

export class QuestionOptionController extends QuestionOptions {
  constructor(questionOption: QuestionOptionController) {
    super();
    const {
      qo_id = null,
      //q_fk = null,
      text = '',
      sequence = null,
      is_active = null,
      created_on = null,
      created_by = null,
      updated_on = null,
      updated_by= null
    } = questionOption;
    this.qo_id = qo_id;
    //this.q_fk = q_fk;
    this.text = text;
    this.sequence = sequence;
    this.is_active = is_active;
    this.created_by = created_by;
    this.created_on = created_on;
    this.updated_by = updated_by;
    this.updated_on = updated_on;
  }

  public toQuestionOption(): QuestionOptions {
    const questionOption: QuestionOptions = new QuestionOptions();
    questionOption.qo_id = this.qo_id;
    questionOption.updated_by = this.updated_by;
    questionOption.updated_on = this.updated_on;
    questionOption.sequence = this.sequence;
    questionOption.is_active = this.is_active;
    questionOption.created_on = this.created_on;
    questionOption.created_by = this.created_by;
    questionOption.text = this.text;
    return questionOption;
  }

  public static async retrieveQuestionOptionById(conn: Connection, qo_id: number): Promise<QuestionOptionController> {
    return conn.getRepository(QuestionOptions).createQueryBuilder('questionOptions')
      .where({ qo_id: qo_id })
      .getOne()
      .then((questionOption) => {
        if (questionOption) {
          return new QuestionOptionController(questionOption as QuestionOptionController);
        } else {
          return Promise.reject(new Error('Question option ID [' + qo_id + '] does not exist.'));
        }
      });
  }
}
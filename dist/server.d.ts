/**
 * CCXT MCP 서버 클래스 구현
 * 이 파일은 MCP 서버와 CCXT 라이브러리 통합을 구현합니다.
 */
import { Exchange } from "ccxt";
/**
 * CCXT MCP 서버 클래스
 * MCP 프로토콜을 통해 CCXT 기능을 노출합니다.
 */
export declare class CcxtMcpServer {
    private server;
    private exchangeInstances;
    private publicExchangeInstances;
    private configPath;
    /**
     * @param configPath 사용자 지정 설정 파일 경로 (선택 사항)
     */
    constructor(configPath?: string);
    /**
     * 설정 파일에서 계정 정보를 로드하고 CCXT 인스턴스를 생성합니다.
     */
    private loadAccountsFromConfig;
    /**
     * 선물 주문을 위한 거래소별 파라미터 반환
     */
    private getFutureParams;
    /**
     * 선물 주문 실행 (자동 재시도 포함)
     */
    executeFutureOrder(accountName: string, orderParams: {
        symbol: string;
        type: string;
        side: string;
        amount: number;
        price?: number;
        params?: any;
    }): Promise<import("ccxt").Order>;
    /**
     * 설정 파일에서 미리 로드된 특정 계정 이름에 해당하는 인증된 거래소 인스턴스를 가져옵니다.
     * @param accountName 설정 파일에 정의된 계정의 'name'
     * @returns 요청된 계정에 대한 CCXT 거래소 인스턴스
     * @throws 계정을 찾을 수 없는 경우 오류 발생
     */
    getExchangeInstance(accountName: string): Exchange;
    /**
     * 공개 데이터 접근을 위한 인증되지 않은 거래소 인스턴스를 가져오거나 생성합니다.
     * @param exchangeId 거래소 ID (e.g., 'binance')
     * @param marketType 시장 유형 ('spot' or 'futures'), 기본값 'spot'
     * @returns 요청된 거래소/시장 유형에 대한 공개 CCXT 인스턴스
     * @throws 지원되지 않는 거래소 ID인 경우 오류 발생
     */
    /**
     * 로드된 모든 계정 이름 목록을 반환합니다.
     */
    getAccountNames(): string[];
    getPublicExchangeInstance(exchangeId: string, marketType?: "spot" | "futures"): Exchange;
    /**
     * MCP 리소스를 등록합니다.
     */
    private registerResources;
    /**
     * MCP 도구를 등록합니다.
     */
    private registerTools;
    /**
     * 서버를 시작합니다.
     */
    start(): Promise<void>;
}

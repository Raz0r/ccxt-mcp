/**
 * 거래 분석 관련 도구들을 정의합니다.
 * 이 파일은 거래 성과 분석, 승률, 수익률 계산 등의 기능을 제공합니다.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CcxtMcpServer } from "../server.js";
/**
 * 거래 분석 관련 도구들을 서버에 등록합니다.
 */
export declare function registerAnalysisTools(server: McpServer, ccxtServer: CcxtMcpServer): void;
